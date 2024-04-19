import { FormEvent, useState } from 'react'

import { Bp, Fm, Ip } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Fm onSubmit={aoEnviarForm}>
      <Ip
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Bp type="submit">Pesquisar</Bp>
    </Fm>
  )
}
export default FormVagas
