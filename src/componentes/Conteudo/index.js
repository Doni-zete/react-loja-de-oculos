import SecaoProdutos from '../SecaoProdutos'
import SecaoContato from '../SecaoContato'
import SecaoSobre from '../SecaoSobre'
import SecaoCapa from '../SecaoCapa'

export default function Conteudo() {
 return (
  <main>
   <SecaoCapa />
   <SecaoProdutos />
   <SecaoSobre />
   <SecaoContato />
  </main>
 )
}
