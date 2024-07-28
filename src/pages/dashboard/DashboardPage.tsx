import '@blocknote/core/fonts/inter.css'
import {useCreateBlockNote} from '@blocknote/react'
import {BlockNoteView} from '@blocknote/mantine'
import '@blocknote/mantine/style.css'

export function DashboardPage() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote()

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      style={{
        width: '300px',
        height: '300px',
      }}
      editor={editor}
      theme="light"
    />
  )
}
