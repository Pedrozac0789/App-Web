const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const nome = document.querySelector('#nome')

const quantidade = document.querySelector('#quantidade')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    nome.value = itens[index].nome
    
    quantidade.value = itens[index].quantidade
    id = index
  } else {
    nome.value = ''

    quantidade.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    
    <td>${item.quantidade} cm</td>
    
    <td class="acao">
    <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
  </td>
  <td class="acao">
    <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
  </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (nome.value == '' || quantidade.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = nome.value
    itens[id].quantidade = quantidade.value
  } else {
    itens.push({'nome': nome.value, 'quantidade': quantidade.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
