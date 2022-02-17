const Yup = require('yup')
const glob = require('glob')
const fm = require('front-matter')
const statuses = require('./statuses')
const fs = require('fs/promises')
const { promisify } = require('util')
const g = promisify(glob)

const commonValidationSchema = Yup.object().shape({
  file: Yup.string().required(),
  title: Yup.string().required(),
  status: Yup.string().oneOf(statuses),
  author: Yup.string().required(),
  implementor: Yup.string().nullable(),
  created: Yup.date().nullable(),
  updated: Yup.date().nullable(),
  requires: Yup.mixed().nullable(),
  'discussions-to': Yup.string().nullable(),
})

const leapValidationSchema = commonValidationSchema
  .concat(
    Yup.object().shape({
      leap: Yup.number().required(),
    }),
  )
  .noUnknown()
  .strict()

;(async () => {
  try {
    const leaps = await g('./content/leaps/*.md')

    await Promise.all(
      leaps.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { attributes } = fm(content)
        return await leapValidationSchema.validate({ file, ...attributes })
      }),
    )
  } catch (error) {
    console.error({
      value: error.value,
      errors: error.errors,
    })
    process.exit(1)
  }
})()
