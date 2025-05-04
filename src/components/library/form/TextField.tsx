
import { Input } from "@/components/ui/input"

import { useFieldContext } from './context.tsx'


export default function TextField({ label, type }: { label: string, type?: string }) {
  const field = useFieldContext<string>()

  return (
    <div
      style={{ margin: '2 px' }}
    >
      <Input
        type={type ? type : "text"}
        placeholder={label}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
    </div>
  )
}
