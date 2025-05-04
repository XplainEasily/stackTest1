
import { useAppForm } from "@/components/library/form/useAppForm"

export const PeoplePage = () => {
  const form = useAppForm({
    defaultValues: {
      username: '',
      password: '',
      age: 0,
    },
    validators: {
      onChange: ({ value }) => {
        const errors = {
          fields: {},
        } as {
          fields: Record<string, string>
        }
        if (!value.username) {
          errors.fields.fullName = 'Full name is required'
        }
        if (!value.age) {
          errors.fields.phone = 'Phone is required'
        }

        console.log(errors)
        return errors
      },
    },
    onSubmit: ({ value }) => {
      // Do something with form data
      console.log(value)
      alert(JSON.stringify(value, null, 2))
    },
  })

  return (

    <div style={{ display: 'flex' }}>
      <form
        className="flex flex-col gap-2 w-[400px]"
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <h1>Personal Information</h1>
        {/* Components are bound to `form` and `field` to ensure extreme type safety */}
        {/* Use `form.AppField` to render a component bound to a single field */}
        <form.AppField
          name="username"
          children={(field) => <field.TextField label='username' />}
        />
        <form.AppField
          name="password"
          children={(field) => <field.TextField label='password' type="password" />}
        />

        {/* The "name" property will throw a TypeScript error if typo'd  */}
        <form.AppField
          name="age"
          children={(field) => <field.TextField label='age' />}
        />
        {/* Components in `form.AppForm` have access to the form context */}
        <form.AppForm>
          <form.SubmitButton label='Submit' />
        </form.AppForm>
      </form>

    </div>
  )
}
