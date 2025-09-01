import * as Dialog from '@radix-ui/react-dialog'

const App = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>Edit profile</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-[#00000050]" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-100 p-[25px] shadow-[var(--shadow-6)] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Edit profile
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="w-[90px] text-right text-[15px] text-violet-900"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet-900 shadow-[0_0_0_1px] shadow-violet-700 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet-800"
              id="name"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button className="inline-flex h-[35px] select-none items-center justify-center rounded bg-green-400 px-[15px] font-medium leading-none text-green-100 outline-none outline-offset-1 hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-green-600">
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full bg-gray-300 text-violet-100 hover:bg-violet-400 focus:shadow-[0_0_0_2px] focus:shadow-violet-700 focus:outline-none"
              aria-label="Close"
            >
              x{/* <Cross2Icon /> */}
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default App
