import { createFormHook } from '@tanstack/react-form'
import { fieldContext, formContext, useFormContext } from './context'
import TextField from './TextField.tsx'
import { Button } from '@/components/ui/button.tsx'

function SubmitButton({ label }: { label: string }) {
  const form = useFormContext()
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => <Button disabled={isSubmitting}>{label}</Button>}
    </form.Subscribe>
  )
}

export const { useAppForm } = createFormHook({
  fieldComponents: { TextField },
  formComponents: { SubmitButton },
  fieldContext,
  formContext,
})
