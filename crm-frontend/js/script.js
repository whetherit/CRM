//Кастомный селект
const addCustomSelect1 = document.querySelector('.add__contact__select-1')
const addChoices1 = new Choices(addCustomSelect1, {
  searchEnabled: false
})

const addCustomSelect2 = document.querySelector('.add__contact__select-2')
const addChoices2 = new Choices(addCustomSelect2, {
  searchEnabled: false
})

const addCustomSelect3 = document.querySelector('.add__contact__select-3')
const addChoices3 = new Choices(addCustomSelect3, {
  searchEnabled: false
})

const addCustomSelect4 = document.querySelector('.add__contact__select-4')
const addChoices4 = new Choices(addCustomSelect4, {
  searchEnabled: false
})

const addCustomSelect5 = document.querySelector('.add__contact__select-5')
const addChoices5 = new Choices(addCustomSelect5, {
  searchEnabled: false
})

const addCustomSelect6 = document.querySelector('.add__contact__select-6')
const addChoices6 = new Choices(addCustomSelect6, {
  searchEnabled: false
})

const addCustomSelect7 = document.querySelector('.add__contact__select-7')
const addChoices7 = new Choices(addCustomSelect7, {
  searchEnabled: false
})

const addCustomSelect8 = document.querySelector('.add__contact__select-8')
const addChoices8 = new Choices(addCustomSelect8, {
  searchEnabled: false
})

const addCustomSelect9 = document.querySelector('.add__contact__select-9')
const addChoices9 = new Choices(addCustomSelect9, {
  searchEnabled: false
})

const addCustomSelect10 = document.querySelector('.add__contact__select-10')
const addChoices10 = new Choices(addCustomSelect10, {
  searchEnabled: false
})

const changeCustomSelect1 = document.querySelector('.change__contact__select-1')
const changeChoices1 = new Choices(changeCustomSelect1, {
  searchEnabled: false
})

const changeCustomSelect2 = document.querySelector('.change__contact__select-2')
const changeChoices2 = new Choices(changeCustomSelect2, {
  searchEnabled: false
})

const changeCustomSelect3 = document.querySelector('.change__contact__select-3')
const changeChoices3 = new Choices(changeCustomSelect3, {
  searchEnabled: false
})

const changeCustomSelect4 = document.querySelector('.change__contact__select-4')
const changeChoices4 = new Choices(changeCustomSelect4, {
  searchEnabled: false
})

const changeCustomSelect5 = document.querySelector('.change__contact__select-5')
const changeChoices5 = new Choices(changeCustomSelect5, {
  searchEnabled: false
})

const changeCustomSelect6 = document.querySelector('.change__contact__select-6')
const changeChoices6 = new Choices(changeCustomSelect6, {
  searchEnabled: false
})

const changeCustomSelect7 = document.querySelector('.change__contact__select-7')
const changeChoices7 = new Choices(changeCustomSelect7, {
  searchEnabled: false
})

const changeCustomSelect8 = document.querySelector('.change__contact__select-8')
const changeChoices8 = new Choices(changeCustomSelect8, {
  searchEnabled: false
})

const changeCustomSelect9 = document.querySelector('.change__contact__select-9')
const changeChoices9 = new Choices(changeCustomSelect9, {
  searchEnabled: false
})

const changeCustomSelect10 = document.querySelector('.change__contact__select-10')
const changeChoices10 = new Choices(changeCustomSelect10, {
  searchEnabled: false
})

const addClientBtn = document.querySelector('.main__client__btn')
const addModal = document.querySelector('.add')
const addCloseBtn = document.querySelector('.add__close')
const addSaveBtn = document.querySelector('.add__save-btn')
const addInputName = document.getElementById('addInputName')
const addInputSurname = document.getElementById('addInputSurname')
const addInputLastName = document.getElementById('addInputLastName')
const addContactBtn = document.querySelector('.add_contact-btn')
const addCancelBtn = document.querySelector('.add__cancel-btn')
const addContactDelete = document.querySelectorAll('.add__contact__cancel')
const addContactSelect1 = document.querySelector('[data-add-select-1]')
const addContactSelect2 = document.querySelector('[data-add-select-2]')
const addContactSelect3 = document.querySelector('[data-add-select-3]')
const addContactSelect4 = document.querySelector('[data-add-select-4]')
const addContactSelect5 = document.querySelector('[data-add-select-5]')
const addContactSelect6 = document.querySelector('[data-add-select-6]')
const addContactSelect7 = document.querySelector('[data-add-select-7]')
const addContactSelect8 = document.querySelector('[data-add-select-8]')
const addContactSelect9 = document.querySelector('[data-add-select-9]')
const addContactSelect10 = document.querySelector('[data-add-select-10]')
const addContactInput1 = document.querySelector('[data-add-input-1]')
const addContactInput2 = document.querySelector('[data-add-input-2]')
const addContactInput3 = document.querySelector('[data-add-input-3]')
const addContactInput4 = document.querySelector('[data-add-input-4]')
const addContactInput5 = document.querySelector('[data-add-input-5]')
const addContactInput6 = document.querySelector('[data-add-input-6]')
const addContactInput7 = document.querySelector('[data-add-input-7]')
const addContactInput8 = document.querySelector('[data-add-input-8]')
const addContactInput9 = document.querySelector('[data-add-input-9]')
const addContactInput10 = document.querySelector('[data-add-input-10]')
const mainTbody = document.querySelector('.main__tbody')
const changeModal = document.querySelector('.change')
const changeContactBtn = document.querySelector('.change__contact-btn')
const changeContactDelete = document.querySelectorAll('.change__contact__cancel')
const changeContactInput1 = document.querySelector('[data-change-input-1]')
const changeContactInput2 = document.querySelector('[data-change-input-2]')
const changeContactInput3 = document.querySelector('[data-change-input-3]')
const changeContactInput4 = document.querySelector('[data-change-input-4]')
const changeContactInput5 = document.querySelector('[data-change-input-5]')
const changeContactInput6 = document.querySelector('[data-change-input-6]')
const changeContactInput7 = document.querySelector('[data-change-input-7]')
const changeContactInput8 = document.querySelector('[data-change-input-8]')
const changeContactInput9 = document.querySelector('[data-change-input-9]')
const changeContactInput10 = document.querySelector('[data-change-input-10]')
const changeContactClose = document.querySelector('.change__close')
const changeInputName = document.getElementById('changeInputName')
const changeInputSurname = document.getElementById('changeInputSurname')
const changeInputLastName = document.getElementById('changeInputLastName')
const changeContactSelect1 = document.querySelector('[data-change-select-1]')
const changeContactSelect2 = document.querySelector('[data-change-select-2]')
const changeContactSelect3 = document.querySelector('[data-change-select-3]')
const changeContactSelect4 = document.querySelector('[data-change-select-4]')
const changeContactSelect5 = document.querySelector('[data-change-select-5]')
const changeContactSelect6 = document.querySelector('[data-change-select-6]')
const changeContactSelect7 = document.querySelector('[data-change-select-7]')
const changeContactSelect8 = document.querySelector('[data-change-select-8]')
const changeContactSelect9 = document.querySelector('[data-change-select-9]')
const changeContactSelect10 = document.querySelector('[data-change-select-10]')
const changeSaveBtn = document.querySelector('.change__save-btn')
const deleteModal = document.querySelector('.delete')
const deleteBtnAccept = document.querySelector('.delete__btn')
const deleteClose = document.querySelector('.delete__close')
const deleteCancel = document.querySelector('.delete__cancel')
const changeCancelBtn = document.querySelector('.change__cancel-btn')
const headerInput = document.querySelector('.header__input')
const mainTheadID = document.querySelector('.main__thead__th-1')
const mainTheadFIO = document.querySelector('.main__thead__th-2')
const mainTheadCreate = document.querySelector('.main__thead__th-3')
const mainTheadChange = document.querySelector('.main__thead__th-4')


let sortFlag = 'id'
let sortDir = true

async function getData() {
  const response = await fetch('http://localhost:3000/api/clients')
  const data = await response.json()
  return data
}

async function createRow(searchParam) {
  let data
  if (searchParam != '') {
    const getSearch = await fetch(`http://localhost:3000/api/clients?search=${searchParam}`)
    data = await getSearch.json()
  } else if (searchParam == '') {
    data = await getData()
  }

  data = data.sort(function (a, b) {
    if (sortFlag == 'fio') {
      let fioA = a.name + a.name + a.lastName
      let fioB = b.name + b.name + b.lastName
      let sort = fioA < fioB
      if (sortDir == false) sort = fioA > fioB
      if (sort) return -1
    } else {
      let sort = a[sortFlag] < b[sortFlag]
      if (sortDir == false) sort = a[sortFlag] > b[sortFlag]
      if (sort) return -1
    }
  })

  mainTbody.innerHTML = ''
  for (const onePerson of data) {
    const mainTbodyTr = document.createElement('tr')
    mainTbodyTr.classList.add('main__tbody__tr')
    const mainID = document.createElement('th')
    const mainFIO = document.createElement('th')
    const mainCreate = document.createElement('th')
    const mainChange = document.createElement('th')
    const mainSocial = document.createElement('th')
    const mainActionsRow = document.createElement('th')
    const mainTableList = document.createElement('ul')
    const mainTableChangeBtn = document.createElement('button')
    const mainTableDeleteBtn = document.createElement('button')
    mainID.classList.add('main__tbody__th-1')
    mainFIO.classList.add('main__tbody__th-2')
    mainCreate.classList.add('main__tbody__th-3')
    mainChange.classList.add('main__tbody__th-4')
    mainSocial.classList.add('main__tbody__th-5')
    mainActionsRow.classList.add('main__tbody__th-6')
    mainTableList.classList.add('main__table__list')
    mainTableChangeBtn.classList.add('main__table__change')
    mainTableDeleteBtn.classList.add('main__table__delete')

    mainTbody.append(mainTbodyTr)
    mainTbodyTr.append(mainID, mainFIO, mainCreate, mainChange, mainSocial, mainActionsRow)
    mainSocial.append(mainTableList)
    mainActionsRow.append(mainTableChangeBtn, mainTableDeleteBtn)

    mainID.textContent = onePerson.id
    mainFIO.textContent = `${onePerson.name} ${onePerson.surname} ${onePerson.lastName}`
    const createDD = onePerson.createdAt.slice(8, 10)
    const createMM = onePerson.createdAt.slice(5, 7)
    const createYear = onePerson.createdAt.slice(0, 4)
    const createTime = onePerson.createdAt.slice(11, 16)
    const changeDD = onePerson.updatedAt.slice(8, 10)
    const changeMM = onePerson.updatedAt.slice(5, 7)
    const changeYear = onePerson.updatedAt.slice(0, 4)
    const changeTime = onePerson.updatedAt.slice(11, 16)
    mainCreate.innerHTML = `${createDD}.${createMM}.${createYear} <span class="main__table__span">${createTime}</span>`
    mainChange.innerHTML = `${changeDD}.${changeMM}.${changeYear} <span class="main__table__span">${changeTime}</span>`
    for (const oneSocial of onePerson.contacts) {
      if (oneSocial.value !== '-') {
        if (oneSocial.type === 'Телефон') {
          mainTableList.innerHTML += `
        <li class="main__table__item">
                      <svg class="main__table__svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.7">
                          <circle cx="8" cy="8" r="8" fill="#000000"/>
                          <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
                        </g>
                      </svg>
                      <div class="marker" tabindex="0">
                        <div class="popup">${oneSocial.value}</div>
                      </div>
                    </li>`
        } else if (oneSocial.type === 'VK') {
          mainTableList.innerHTML += `<li class="main__table__item">
                      <svg class="main__table__svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97312 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92644 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70111C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#000000"/>
                      </svg>
                      <div class="marker" tabindex="0">
                        <div class="popup">${oneSocial.value}</div>
                      </div>
                    </li>
        `
        } else if (oneSocial.type === 'Facebook') {
          mainTableList.innerHTML += `
        <li class="main__table__item">
                      <svg class="main__table__svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#000000"/>
                      </svg>
                      <div class="marker" tabindex="0">
                        <div class="popup">${oneSocial.value}</div>
                      </div>
                    </li>`
        } else if (oneSocial.type === 'Email') {
          mainTableList.innerHTML += `
        <li class="main__table__item">
                      <svg class="main__table__svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#000000"/>
                      </svg>
                      <div class="marker" tabindex="0">
                        <div class="popup">${oneSocial.value}</div>
                      </div>
                    </li>`
        } else if (oneSocial.type === 'Другое') {
          mainTableList.innerHTML += `
        <li class="main__table__item">
                      <svg class="main__table__svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="7.5" stroke="#000000"/>
                        <path d="M4.92969 8.52734H3.375V7.83203H4.92969V6.23828H5.63281V7.83203H7.19141V8.52734H5.63281V10.1133H4.92969V8.52734ZM7.9375 8.56641C7.9375 6.33203 8.84766 5.21484 10.668 5.21484C10.9544 5.21484 11.1966 5.23698 11.3945 5.28125V6.04688C11.1966 5.98958 10.9674 5.96094 10.707 5.96094C10.0951 5.96094 9.63542 6.125 9.32812 6.45312C9.02083 6.78125 8.85417 7.30729 8.82812 8.03125H8.875C8.9974 7.82031 9.16927 7.65755 9.39062 7.54297C9.61198 7.42578 9.8724 7.36719 10.1719 7.36719C10.6901 7.36719 11.0938 7.52604 11.3828 7.84375C11.6719 8.16146 11.8164 8.59245 11.8164 9.13672C11.8164 9.73568 11.6484 10.2096 11.3125 10.5586C10.9792 10.9049 10.5234 11.0781 9.94531 11.0781C9.53646 11.0781 9.18099 10.9805 8.87891 10.7852C8.57682 10.5872 8.34375 10.3008 8.17969 9.92578C8.01823 9.54818 7.9375 9.09505 7.9375 8.56641ZM9.92969 10.3203C10.2448 10.3203 10.487 10.2188 10.6562 10.0156C10.8281 9.8125 10.9141 9.52214 10.9141 9.14453C10.9141 8.81641 10.8333 8.55859 10.6719 8.37109C10.513 8.18359 10.2734 8.08984 9.95312 8.08984C9.75521 8.08984 9.57292 8.13281 9.40625 8.21875C9.23958 8.30208 9.10807 8.41797 9.01172 8.56641C8.91536 8.71224 8.86719 8.86198 8.86719 9.01562C8.86719 9.38281 8.96615 9.69271 9.16406 9.94531C9.36458 10.1953 9.61979 10.3203 9.92969 10.3203Z" fill="#333333"/>
                      </svg>
                      <div class="marker" tabindex="0">
                        <div class="popup">${oneSocial.value}</div>
                      </div>
                    </li>`
        }
      }
    }

    mainTableChangeBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.7" clip-path="url(#clip0_121_2280)">
                          <path d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z" fill="#000000"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_121_2280">
                            <rect width="16" height="16" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                      <span class="main__change__span">Изменить</span>`

    mainTableDeleteBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.7" clip-path="url(#clip0_121_2305)">
                        <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#F06A4D"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_121_2305">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span class="main__delete__span">Удалить</span>`


    mainTableChangeBtn.addEventListener('click', async function () {
      changeModal.classList.remove('d-none')
      changeModal.querySelector('.change__id').textContent = `ID: ${mainTableChangeBtn.closest('.main__tbody__tr').querySelector('.main__tbody__th-1').innerText}`

      const getResponse = await fetch(`http://localhost:3000/api/clients/${mainTableChangeBtn.closest('.main__tbody__tr').querySelector('.main__tbody__th-1').innerText}`)
      const getData = await getResponse.json()
      changeInputSurname.value = getData.surname
      changeInputName.value = getData.name
      changeInputLastName.value = getData.lastName

      let countContactClick = 0

      let number1 = false
      let number2 = false
      let number3 = false
      let number4 = false
      let number5 = false
      let number6 = false
      let number7 = false
      let number8 = false
      let number9 = false
      let number10 = false
      let inputValue1 = '-'
      let inputValue2 = '-'
      let inputValue3 = '-'
      let inputValue4 = '-'
      let inputValue5 = '-'
      let inputValue6 = '-'
      let inputValue7 = '-'
      let inputValue8 = '-'
      let inputValue9 = '-'
      let inputValue10 = '-'


      for (const oneContact of getData.contacts) {
        if (oneContact.value !== '-' && number1 === false) {
          number1 = true
          changeContactSelect1.value = oneContact.type
          changeContactInput1.value = oneContact.value
        } else if (oneContact.value !== '-' && number2 === false) {
          number2 = true
          changeContactSelect2.value = oneContact.type
          changeContactInput2.value = oneContact.value
        } else if (oneContact.value !== '-' && number3 === false) {
          number3 = true
          changeContactSelect3.value = oneContact.type
          changeContactInput3.value = oneContact.value
        } else if (oneContact.value !== '-' && number4 === false) {
          number4 = true
          changeContactSelect4.value = oneContact.type
          changeContactInput4.value = oneContact.value
        } else if (oneContact.value !== '-' && number5 === false) {
          number5 = true
          changeContactSelect5.value = oneContact.type
          changeContactInput5.value = oneContact.value
        } else if (oneContact.value !== '-' && number6 === false) {
          number6 = true
          changeContactSelect6.value = oneContact.type
          changeContactInput6.value = oneContact.value
        } else if (oneContact.value !== '-' && number7 === false) {
          number7 = true
          changeContactSelect7.value = oneContact.type
          changeContactInput7.value = oneContact.value
        } else if (oneContact.value !== '-' && number8 === false) {
          number8 = true
          changeContactSelect8.value = oneContact.type
          changeContactInput8.value = oneContact.value
        } else if (oneContact.value !== '-' && number9 === false) {
          number9 = true
          changeContactSelect9.value = oneContact.type
          changeContactInput9.value = oneContact.value
        } else if (oneContact.value !== '-' && number10 === false) {
          number10 = true
          changeContactSelect10.value = oneContact.type
          changeContactInput10.value = oneContact.value
        }
      }

      if (number1 === true && document.querySelector('[data-change-1]').classList.contains('d-none') && changeContactInput1.value !== '-') {
        document.querySelector('[data-change-1]').classList.remove('d-none')
        number1 = false
      }
      if (number2 === true && document.querySelector('[data-change-2]').classList.contains('d-none') && changeContactInput2.value !== '-') {
        document.querySelector('[data-change-2]').classList.remove('d-none')
        countContactClick++
        number2 = false
      }
      if (number3 === true && document.querySelector('[data-change-3]').classList.contains('d-none') && changeContactInput3.value !== '-') {
        document.querySelector('[data-change-3]').classList.remove('d-none')
        countContactClick++
        number3 = false
      }
      if (number4 === true && document.querySelector('[data-change-4]').classList.contains('d-none') && changeContactInput4.value !== '-') {
        document.querySelector('[data-change-4]').classList.remove('d-none')
        countContactClick++
        number4 = false
      }
      if (number5 === true && document.querySelector('[data-change-5]').classList.contains('d-none') && changeContactInput5.value !== '-') {
        document.querySelector('[data-change-5]').classList.remove('d-none')
        countContactClick++
        number5 = false
      }
      if (number6 === true && document.querySelector('[data-change-6]').classList.contains('d-none') && changeContactInput6.value !== '-') {
        document.querySelector('[data-change-6]').classList.remove('d-none')
        countContactClick++
        number6 = false
      }
      if (number7 === true && document.querySelector('[data-change-7]').classList.contains('d-none') && changeContactInput7.value !== '-') {
        document.querySelector('[data-change-7]').classList.remove('d-none')
        countContactClick++
        number7 = false
      }
      if (number8 === true && document.querySelector('[data-change-8]').classList.contains('d-none') && changeContactInput8.value !== '-') {
        document.querySelector('[data-change-8]').classList.remove('d-none')
        countContactClick++
        number8 = false
      }
      if (number9 === true && document.querySelector('[data-change-9]').classList.contains('d-none') && changeContactInput9.value !== '-') {
        document.querySelector('[data-change-9]').classList.remove('d-none')
        countContactClick++
        number9 = false
      }
      if (number10 === true && document.querySelector('[data-change-10]').classList.contains('d-none') && changeContactInput10.value !== '-') {
        document.querySelector('[data-change-10]').classList.remove('d-none')
        countContactClick++
        number10 = false
      }

      changeContactBtn.addEventListener('click', () => {
        countContactClick++
        if (number1 === true && document.querySelector('[data-change-1]').classList.contains('d-none') && changeContactInput1.value !== '-') {
          document.querySelector('[data-change-1]').classList.remove('d-none')
          number1 = false
        }
        if (number2 === true && document.querySelector('[data-change-2]').classList.contains('d-none') && changeContactInput2.value !== '-') {
          document.querySelector('[data-change-2]').classList.remove('d-none')
          countContactClick++
          number2 = false
        }
        if (number3 === true && document.querySelector('[data-change-3]').classList.contains('d-none') && changeContactInput3.value !== '-') {
          document.querySelector('[data-change-3]').classList.remove('d-none')
          countContactClick++
          number3 = false
        }
        if (number4 === true && document.querySelector('[data-change-4]').classList.contains('d-none') && changeContactInput4.value !== '-') {
          document.querySelector('[data-change-4]').classList.remove('d-none')
          countContactClick++
          number4 = false
        }
        if (number5 === true && document.querySelector('[data-change-5]').classList.contains('d-none') && changeContactInput5.value !== '-') {
          document.querySelector('[data-change-5]').classList.remove('d-none')
          countContactClick++
          number5 = false
        }
        if (number6 === true && document.querySelector('[data-change-6]').classList.contains('d-none') && changeContactInput6.value !== '-') {
          document.querySelector('[data-change-6]').classList.remove('d-none')
          countContactClick++
          number6 = false
        }
        if (number7 === true && document.querySelector('[data-change-7]').classList.contains('d-none') && changeContactInput7.value !== '-') {
          document.querySelector('[data-change-7]').classList.remove('d-none')
          countContactClick++
          number7 = false
        }
        if (number8 === true && document.querySelector('[data-change-8]').classList.contains('d-none') && changeContactInput8.value !== '-') {
          document.querySelector('[data-change-8]').classList.remove('d-none')
          countContactClick++
          number8 = false
        }
        if (number9 === true && document.querySelector('[data-change-9]').classList.contains('d-none') && changeContactInput9.value !== '-') {
          document.querySelector('[data-change-9]').classList.remove('d-none')
          countContactClick++
          number9 = false
        }
        if (number10 === true && document.querySelector('[data-change-10]').classList.contains('d-none') && changeContactInput10.value !== '-') {
          document.querySelector('[data-change-10]').classList.remove('d-none')
          countContactClick++
          number10 = false
        }


        if (number1 === false && changeContactInput1.value === '') {
          document.querySelector('[data-change-1]').classList.remove('d-none')
          number1 = true
        } else if (number2 === false && changeContactInput2.value === '') {
          document.querySelector('[data-change-2]').classList.remove('d-none')
          number2 = true
        } else if (number3 === false && changeContactInput3.value === '') {
          document.querySelector('[data-change-3]').classList.remove('d-none')
          number3 = true
        } else if (number4 === false && changeContactInput4.value === '') {
          document.querySelector('[data-change-4]').classList.remove('d-none')
          number4 = true
        } else if (number5 === false && changeContactInput5.value === '') {
          document.querySelector('[data-change-5]').classList.remove('d-none')
          number5 = true
        } else if (number6 === false && changeContactInput6.value === '') {
          document.querySelector('[data-change-6]').classList.remove('d-none')
          number6 = true
        } else if (number7 === false && changeContactInput7.value === '') {
          document.querySelector('[data-change-7]').classList.remove('d-none')
          number7 = true
        } else if (number8 === false && changeContactInput8.value === '') {
          document.querySelector('[data-change-8]').classList.remove('d-none')
          number8 = true
        } else if (number9 === false && changeContactInput9.value === '') {
          document.querySelector('[data-change-9]').classList.remove('d-none')
          number9 = true
        } else if (number10 === false && changeContactInput10.value === '') {
          document.querySelector('[data-change-10]').classList.remove('d-none')
          number10 = true
        }

        if (countContactClick === 10) {
          changeContactBtn.classList.add('d-none')
        }

        changeContactDelete.forEach((el) => {
          el.addEventListener('click', () => {
            el.closest('.change__contact__row').classList.add('d-none')
            let deleteItem = Number(el.closest('.change__contact__row').getAttribute('data-change'))

            if (deleteItem === 1) {
              number1 = false
              changeContactInput1.value = ''
            } else if (deleteItem === 2) {
              number2 = false
              changeContactInput2.value = ''
            } else if (deleteItem === 3) {
              number3 = false
              changeContactInput3.value = ''
            } else if (deleteItem === 4) {
              number4 = false
              changeContactInput4.value = ''
            } else if (deleteItem === 5) {
              number5 = false
              changeContactInput5.value = ''
            } else if (deleteItem === 6) {
              number6 = false
              changeContactInput6.value = ''
            } else if (deleteItem === 7) {
              number7 = false
              changeContactInput7.value = ''
            } else if (deleteItem === 8) {
              number8 = false
              changeContactInput8.value = ''
            } else if (deleteItem === 9) {
              number9 = false
              changeContactInput9.value = ''
            } else if (deleteItem === 10) {
              number10 = false
              changeContactInput10.value = ''
            }

            changeContactBtn.classList.remove('d-none')
            countContactClick--
          })
        })
      })

      changeContactClose.addEventListener('click', () => {
        changeModal.classList.add('d-none')
        changeInputName.value = ''
        changeInputSurname.value = ''
        changeInputLastName.value = ''
        if (changeContactInput1.value !== inputValue1 && number1 === false) {
          document.querySelector('[data-change-1]').classList.add('d-none')
        }
        if (changeContactInput2.value !== inputValue2 && number2 === false) {
          document.querySelector('[data-change-2]').classList.add('d-none')
        }
        if (changeContactInput3.value !== inputValue3 && number3 === false) {
          document.querySelector('[data-change-3]').classList.add('d-none')
        }
        if (changeContactInput4.value !== inputValue4 && number4 === false) {
          document.querySelector('[data-change-4]').classList.add('d-none')
        }
        if (changeContactInput5.value !== inputValue5 && number5 === false) {
          document.querySelector('[data-change-5]').classList.add('d-none')
        }
        if (changeContactInput6.value !== inputValue6 && number6 === false) {
          document.querySelector('[data-change-6]').classList.add('d-none')
        }
        if (changeContactInput7.value !== inputValue7 && number7 === false) {
          document.querySelector('[data-change-7]').classList.add('d-none')
        }
        if (changeContactInput8.value !== inputValue8 && number8 === false) {
          document.querySelector('[data-change-8]').classList.add('d-none')
        }
        if (changeContactInput9.value !== inputValue9 && number9 === false) {
          document.querySelector('[data-change-9]').classList.add('d-none')
        }
        if (changeContactInput10.value !== inputValue10 && number10 === false) {
          document.querySelector('[data-change-10]').classList.add('d-none')
        }

        if (document.querySelector('[data-change-1]').classList.contains('d-none') === false) {
          document.querySelector('[data-change-1]').classList.add('d-none')
        }

        if (document.querySelector('[data-change-2]').classList.contains('d-none') === false) {
          document.querySelector('[data-change-2]').classList.add('d-none')
        }

        if (document.querySelector('[data-change-3]').classList.contains('d-none') === false) {
          document.querySelector('[data-change-3]').classList.add('d-none')
        }

        if (document.querySelector('[data-change-4]').classList.contains('d-none') === false) {
          document.querySelector('[data-change-4]').classList.add('d-none')
        }

        if (document.querySelector('[data-change-5]').classList.contains('d-none') === false) {
          document.querySelector('[data-change-5]').classList.add('d-none')
        }

        if (document.querySelector('[data-change-6]').classList.contains('d-none') === false) {
          document.querySelector('[data-change-6]').classList.add('d-none')
        }

        if (document.querySelector('[data-change-7]').classList.contains('d-none') === false) {
          document.querySelector('[data-change-7]').classList.add('d-none')
        }

        if (document.querySelector('[data-change-8]').classList.contains('d-none') === false) {
          document.querySelector('[data-change-8]').classList.add('d-none')
        }

        if (document.querySelector('[data-change-9]').classList.contains('d-none') === false) {
          document.querySelector('[data-change-9]').classList.add('d-none')
        }

        if (document.querySelector('[data-change-10]').classList.contains('d-none') === false) {
          document.querySelector('[data-change-10]').classList.add('d-none')
        }

        countContactClick = 0

        changeContactBtn.classList.remove('d-none')
      })

      changeCancelBtn.addEventListener('click', function () {
        changeModal.classList.add('d-none')
        deletePerson(mainTableChangeBtn.closest('.main__tbody__tr').querySelector('.main__tbody__th-1').innerText)
      })

      changeSaveBtn.addEventListener('click', async function () {
        if (changeInputName.value.trim() !== '' && changeInputSurname.value.trim() !== '') {
          let changeContactInputValue1
          let changeContactInputValue2
          let changeContactInputValue3
          let changeContactInputValue4
          let changeContactInputValue5
          let changeContactInputValue6
          let changeContactInputValue7
          let changeContactInputValue8
          let changeContactInputValue9
          let changeContactInputValue10

          if (changeContactInput1.value.trim() !== '') {
            changeContactInputValue1 = changeContactInput1.value.trim()
          } else {
            // changeContactInputValue1 = '-'
          }
          if (changeContactInput2.value.trim() !== '') {
            changeContactInputValue2 = changeContactInput2.value.trim()
          } else {
            changeContactInputValue2 = '-'
          }
          if (changeContactInput3.value.trim() !== '') {
            changeContactInputValue3 = changeContactInput3.value.trim()
          } else {
            changeContactInputValue3 = '-'
          }
          if (changeContactInput4.value.trim() !== '') {
            changeContactInputValue4 = changeContactInput4.value.trim()
          } else {
            changeContactInputValue4 = '-'
          }
          if (changeContactInput5.value.trim() !== '') {
            changeContactInputValue5 = changeContactInput5.value.trim()
          } else {
            changeContactInputValue5 = '-'
          }
          if (changeContactInput6.value.trim() !== '') {
            changeContactInputValue6 = changeContactInput6.value.trim()
          } else {
            changeContactInputValue6 = '-'
          }
          if (changeContactInput7.value.trim() !== '') {
            changeContactInputValue7 = changeContactInput7.value.trim()
          } else {
            changeContactInputValue7 = '-'
          }
          if (changeContactInput8.value.trim() !== '') {
            changeContactInputValue8 = changeContactInput8.value.trim()
          } else {
            changeContactInputValue8 = '-'
          }
          if (changeContactInput9.value.trim() !== '') {
            changeContactInputValue9 = changeContactInput9.value.trim()
          } else {
            changeContactInputValue9 = '-'
          }
          if (changeContactInput10.value.trim() !== '') {
            changeContactInputValue10 = changeContactInput10.value.trim()
          } else {
            changeContactInputValue10 = '-'
          }

          const patchResponse = await fetch(`http://localhost:3000/api/clients/${changeModal.querySelector('.change__id').innerText.slice(4)}`, {
            method: 'PATCH',
            body: JSON.stringify({
              name: changeInputName.value.trim(),
              surname: changeInputSurname.value.trim(),
              lastName: changeInputLastName.value.trim(),
              contacts: [
                {
                  type: changeContactSelect1.innerText,
                  value: changeContactInputValue1
                },
                {
                  type: changeContactSelect2.innerText,
                  value: changeContactInputValue2
                },
                {
                  type: changeContactSelect3.innerText,
                  value: changeContactInputValue3
                },
                {
                  type: changeContactSelect4.innerText,
                  value: changeContactInputValue4
                },
                {
                  type: changeContactSelect5.innerText,
                  value: changeContactInputValue5
                },
                {
                  type: changeContactSelect6.innerText,
                  value: changeContactInputValue6
                },
                {
                  type: changeContactSelect7.innerText,
                  value: changeContactInputValue7
                },
                {
                  type: changeContactSelect8.innerText,
                  value: changeContactInputValue8
                },
                {
                  type: changeContactSelect9.innerText,
                  value: changeContactInputValue9
                },
                {
                  type: changeContactSelect10.innerText,
                  value: changeContactInputValue10
                }
              ]
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          setTimeout(function () {
            location.reload()
          }, 100)
          await createRow('')
          changeInputName.value = ''
          changeInputSurname.value = ''
          changeInputLastName.value = ''
          if (changeContactInput1.value !== inputValue1 && number1 === false) {
            document.querySelector('[data-change-1]').classList.add('d-none')
          }
          if (changeContactInput2.value !== inputValue2 && number2 === false) {
            document.querySelector('[data-change-2]').classList.add('d-none')
          }
          if (changeContactInput3.value !== inputValue3 && number3 === false) {
            document.querySelector('[data-change-3]').classList.add('d-none')
          }
          if (changeContactInput4.value !== inputValue4 && number4 === false) {
            document.querySelector('[data-change-4]').classList.add('d-none')
          }
          if (changeContactInput5.value !== inputValue5 && number5 === false) {
            document.querySelector('[data-change-5]').classList.add('d-none')
          }
          if (changeContactInput6.value !== inputValue6 && number6 === false) {
            document.querySelector('[data-change-6]').classList.add('d-none')
          }
          if (changeContactInput7.value !== inputValue7 && number7 === false) {
            document.querySelector('[data-change-7]').classList.add('d-none')
          }
          if (changeContactInput8.value !== inputValue8 && number8 === false) {
            document.querySelector('[data-change-8]').classList.add('d-none')
          }
          if (changeContactInput9.value !== inputValue9 && number9 === false) {
            document.querySelector('[data-change-9]').classList.add('d-none')
          }
          if (changeContactInput10.value !== inputValue10 && number10 === false) {
            document.querySelector('[data-change-10]').classList.add('d-none')
          }
          if (document.querySelector('[data-change-1]').classList.contains('d-none') === false) {
            document.querySelector('[data-change-1]').classList.add('d-none')
          }
          if (document.querySelector('[data-change-2]').classList.contains('d-none') === false) {
            document.querySelector('[data-change-2]').classList.add('d-none')
          }
          if (document.querySelector('[data-change-3]').classList.contains('d-none') === false) {
            document.querySelector('[data-change-3]').classList.add('d-none')
          }
          if (document.querySelector('[data-change-4]').classList.contains('d-none') === false) {
            document.querySelector('[data-change-4]').classList.add('d-none')
          }
          if (document.querySelector('[data-change-5]').classList.contains('d-none') === false) {
            document.querySelector('[data-change-5]').classList.add('d-none')
          }
          if (document.querySelector('[data-change-6]').classList.contains('d-none') === false) {
            document.querySelector('[data-change-6]').classList.add('d-none')
          }
          if (document.querySelector('[data-change-7]').classList.contains('d-none') === false) {
            document.querySelector('[data-change-7]').classList.add('d-none')
          }
          if (document.querySelector('[data-change-8]').classList.contains('d-none') === false) {
            document.querySelector('[data-change-8]').classList.add('d-none')
          }
          if (document.querySelector('[data-change-9]').classList.contains('d-none') === false) {
            document.querySelector('[data-change-9]').classList.add('d-none')
          }
          if (document.querySelector('[data-change-10]').classList.contains('d-none') === false) {
            document.querySelector('[data-change-10]').classList.add('d-none')
          }
          changeInputName.value = ''
          changeInputSurname.value = ''
          changeInputLastName.value = ''
          changeContactInput1.value = ''
          changeContactInput2.value = ''
          changeContactInput3.value = ''
          changeContactInput4.value = ''
          changeContactInput5.value = ''
          changeContactInput6.value = ''
          changeContactInput7.value = ''
          changeContactInput8.value = ''
          changeContactInput9.value = ''
          changeContactInput10.value = ''
          changeModal.classList.add('d-none')
        }
      })

    })

    mainTableDeleteBtn.addEventListener('click', function () {
      deletePerson(mainTableDeleteBtn.closest('.main__tbody__tr').querySelector('.main__tbody__th-1').innerText)
    })

  }
}

addClientBtn.addEventListener('click', function () {
  addModal.classList.remove('d-none')

  let countContactClick = 0
  let number1 = false
  let number2 = false
  let number3 = false
  let number4 = false
  let number5 = false
  let number6 = false
  let number7 = false
  let number8 = false
  let number9 = false
  let number10 = false


  addContactBtn.addEventListener('click', () => {
    countContactClick++
    if (number1 === false) {
      document.querySelector('[data-add-1]').classList.remove('d-none')
      number1 = true
    } else if (number2 === false) {
      document.querySelector('[data-add-2]').classList.remove('d-none')
      number2 = true
    } else if (number3 === false) {
      document.querySelector('[data-add-3]').classList.remove('d-none')
      number3 = true
    } else if (number4 === false) {
      document.querySelector('[data-add-4]').classList.remove('d-none')
      number4 = true
    } else if (number5 === false) {
      document.querySelector('[data-add-5]').classList.remove('d-none')
      number5 = true
    } else if (number6 === false) {
      document.querySelector('[data-add-6]').classList.remove('d-none')
      number6 = true
    } else if (number7 === false) {
      document.querySelector('[data-add-7]').classList.remove('d-none')
      number7 = true
    } else if (number8 === false) {
      document.querySelector('[data-add-8]').classList.remove('d-none')
      number8 = true
    } else if (number9 === false) {
      document.querySelector('[data-add-9]').classList.remove('d-none')
      number9 = true
    } else if (number10 === false) {
      document.querySelector('[data-add-10]').classList.remove('d-none')
      number10 = true
    }

    if (countContactClick === 10) {
      addContactBtn.classList.add('d-none')
    }
  })

  addContactDelete.forEach(function (el) {
    el.addEventListener('click', () => {
      el.closest('.add__contact__row').classList.add('d-none')
      let deleteItem = Number(el.closest('.add__contact__row').getAttribute('data-add'))
      if (deleteItem === 1) {
        number1 = false
        addContactInput1.value = ''
      } else if (deleteItem === 2) {
        number2 = false
        addContactInput2.value = ''
      } else if (deleteItem === 3) {
        number3 = false
        addContactInput3.value = ''
      } else if (deleteItem === 4) {
        number4 = false
        addContactInput4.value = ''
      } else if (deleteItem === 5) {
        number5 = false
        addContactInput5.value = ''
      } else if (deleteItem === 6) {
        number6 = false
        addContactInput6.value = ''
      } else if (deleteItem === 7) {
        number7 = false
        addContactInput7.value = ''
      } else if (deleteItem === 8) {
        number8 = false
        addContactInput8.value = ''
      } else if (deleteItem === 9) {
        number9 = false
        addContactInput9.value = ''
      } else if (deleteItem === 10) {
        number10 = false
        addContactInput10.value = ''
      }

      addContactBtn.classList.remove('d-none')
      countContactClick--
    })
  })

  addCancelBtn.addEventListener('click', () => {
    addModal.classList.add('d-none')
  })
})

addSaveBtn.addEventListener('click', async function () {
  if (addInputName.value.trim() !== '' && addInputSurname.value.trim() !== '') {
    let addContactInputValue1
    let addContactInputValue2
    let addContactInputValue3
    let addContactInputValue4
    let addContactInputValue5
    let addContactInputValue6
    let addContactInputValue7
    let addContactInputValue8
    let addContactInputValue9
    let addContactInputValue10

    if (addContactInput1.value.trim() !== '') {
      addContactInputValue1 = addContactInput1.value.trim()
    } else {
      addContactInputValue1 = '-'
    }
    if (addContactInput2.value.trim() !== '') {
      addContactInputValue2 = addContactInput2.value.trim()
    } else {
      addContactInputValue2 = '-'
    }
    if (addContactInput3.value.trim() !== '') {
      addContactInputValue3 = addContactInput3.value.trim()
    } else {
      addContactInputValue3 = '-'
    }
    if (addContactInput4.value.trim() !== '') {
      addContactInputValue4 = addContactInput4.value.trim()
    } else {
      addContactInputValue4 = '-'
    }
    if (addContactInput5.value.trim() !== '') {
      addContactInputValue5 = addContactInput5.value.trim()
    } else {
      addContactInputValue5 = '-'
    }
    if (addContactInput6.value.trim() !== '') {
      addContactInputValue6 = addContactInput6.value.trim()
    } else {
      addContactInputValue6 = '-'
    }
    if (addContactInput7.value.trim() !== '') {
      addContactInputValue7 = addContactInput7.value.trim()
    } else {
      addContactInputValue7 = '-'
    }
    if (addContactInput8.value.trim() !== '') {
      addContactInputValue8 = addContactInput8.value.trim()
    } else {
      addContactInputValue8 = '-'
    }
    if (addContactInput9.value.trim() !== '') {
      addContactInputValue9 = addContactInput9.value.trim()
    } else {
      addContactInputValue9 = '-'
    }
    if (addContactInput10.value.trim() !== '') {
      addContactInputValue10 = addContactInput10.value.trim()
    } else {
      addContactInputValue10 = '-'
    }

    const response = await fetch('http://localhost:3000/api/clients', {
      method: 'POST',
      body: JSON.stringify({
        name: addInputName.value.trim(),
        surname: addInputSurname.value.trim(),
        lastName: addInputLastName.value.trim(),
        contacts: [
          {
            type: addContactSelect1.value,
            value: addContactInputValue1
          },
          {
            type: addContactSelect2.value,
            value: addContactInputValue2
          },
          {
            type: addContactSelect3.value,
            value: addContactInputValue3
          },
          {
            type: addContactSelect4.value,
            value: addContactInputValue4
          },
          {
            type: addContactSelect5.value,
            value: addContactInputValue5
          },
          {
            type: addContactSelect6.value,
            value: addContactInputValue6
          },
          {
            type: addContactSelect7.value,
            value: addContactInputValue7
          },
          {
            type: addContactSelect8.value,
            value: addContactInputValue8
          },
          {
            type: addContactSelect9.value,
            value: addContactInputValue9
          },
          {
            type: addContactSelect10.value,
            value: addContactInputValue10
          }
        ]
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const dataResponse = await response.json()
    await createRow('')

    if (document.querySelector('[data-add-1]').classList.contains('d-none') === false) {
      document.querySelector('[data-add-1]').classList.add('d-none')
    }

    if (document.querySelector('[data-add-2]').classList.contains('d-none') === false) {
      document.querySelector('[data-add-2]').classList.add('d-none')
    }

    if (document.querySelector('[data-add-3]').classList.contains('d-none') === false) {
      document.querySelector('[data-add-3]').classList.add('d-none')
    }

    if (document.querySelector('[data-add-4]').classList.contains('d-none') === false) {
      document.querySelector('[data-add-4]').classList.add('d-none')
    }

    if (document.querySelector('[data-add-5]').classList.contains('d-none') === false) {
      document.querySelector('[data-add-5]').classList.add('d-none')
    }

    if (document.querySelector('[data-add-6]').classList.contains('d-none') === false) {
      document.querySelector('[data-add-6]').classList.add('d-none')
    }

    if (document.querySelector('[data-add-7]').classList.contains('d-none') === false) {
      document.querySelector('[data-add-7]').classList.add('d-none')
    }

    if (document.querySelector('[data-add-8]').classList.contains('d-none') === false) {
      document.querySelector('[data-add-8]').classList.add('d-none')
    }

    if (document.querySelector('[data-add-9]').classList.contains('d-none') === false) {
      document.querySelector('[data-add-9]').classList.add('d-none')
    }

    if (document.querySelector('[data-add-10]').classList.contains('d-none') === false) {
      document.querySelector('[data-add-10]').classList.add('d-none')
    }

    addInputName.value = ''
    addInputSurname.value = ''
    addInputLastName.value = ''
    addContactInput1.value = ''
    addContactInput2.value = ''
    addContactInput3.value = ''
    addContactInput4.value = ''
    addContactInput5.value = ''
    addContactInput6.value = ''
    addContactInput7.value = ''
    addContactInput8.value = ''
    addContactInput9.value = ''
    addContactInput10.value = ''
    addModal.classList.add('d-none')
    addModal.classList.add('d-none')
  } else if (addInputSurname.value.trim() === '' || addInputSurname.value.trim() === '') {
    document.querySelector('.add__invalid').classList.remove('d-none')
    document.querySelector('.add__invalid').textContent = 'Заполните поля имени и фамилии'
  }
})


addCloseBtn.addEventListener('click', () => {
  addModal.classList.add('d-none')
  addInputName.value = ''
  addInputSurname.value = ''
  addInputLastName.value = ''
  addContactInput1.value = ''
  addContactInput2.value = ''
  addContactInput3.value = ''
  addContactInput4.value = ''
  addContactInput5.value = ''
  addContactInput6.value = ''
  addContactInput7.value = ''
  addContactInput8.value = ''
  addContactInput9.value = ''
  addContactInput10.value = ''

  if (document.querySelector('[data-add-1]').classList.contains('d-none') === false) {
    document.querySelector('[data-add-1]').classList.add('d-none')
  }

  if (document.querySelector('[data-add-2]').classList.contains('d-none') === false) {
    document.querySelector('[data-add-2]').classList.add('d-none')
  }

  if (document.querySelector('[data-add-3]').classList.contains('d-none') === false) {
    document.querySelector('[data-add-3]').classList.add('d-none')
  }

  if (document.querySelector('[data-add-4]').classList.contains('d-none') === false) {
    document.querySelector('[data-add-4]').classList.add('d-none')
  }

  if (document.querySelector('[data-add-5]').classList.contains('d-none') === false) {
    document.querySelector('[data-add-5]').classList.add('d-none')
  }

  if (document.querySelector('[data-add-6]').classList.contains('d-none') === false) {
    document.querySelector('[data-add-6]').classList.add('d-none')
  }

  if (document.querySelector('[data-add-7]').classList.contains('d-none') === false) {
    document.querySelector('[data-add-7]').classList.add('d-none')
  }

  if (document.querySelector('[data-add-8]').classList.contains('d-none') === false) {
    document.querySelector('[data-add-8]').classList.add('d-none')
  }

  if (document.querySelector('[data-add-9]').classList.contains('d-none') === false) {
    document.querySelector('[data-add-9]').classList.add('d-none')
  }

  if (document.querySelector('[data-add-10]').classList.contains('d-none') === false) {
    document.querySelector('[data-add-10]').classList.add('d-none')
  }

  addContactBtn.classList.remove('d-none')
  document.querySelector('.add__invalid').classList.add('d-none')
})

window.addEventListener('DOMContentLoaded', async () => {
  await createRow('')
})

function deletePerson(id) {
  deleteModal.classList.remove('d-none')

  deleteClose.addEventListener('click', function () {
    deleteModal.classList.add('d-none')
  })

  deleteCancel.addEventListener('click', function () {
    deleteModal.classList.add('d-none')
  })

  deleteBtnAccept.addEventListener('click', async function () {
    const deleteResponse = await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: 'DELETE'
    })

    await createRow('')
    deleteModal.classList.add('d-none')
  })
}


let inputWithDelay = null

headerInput.addEventListener('input', function () {
  clearInterval(inputWithDelay)
  inputWithDelay = setTimeout(async function () {
    await createRow(headerInput.value.trim())
  }, 300)
})


mainTheadID.addEventListener('click', async function () {
  sortFlag = 'id'
  sortDir = !sortDir
  document.querySelector('.main__table__id').classList.toggle('arrow-top')
  await createRow('')
})

mainTheadFIO.addEventListener('click', async function () {
  sortFlag = 'fio'
  sortDir = !sortDir
  document.querySelector('.main__table__fio').classList.toggle('fio-top')
  await createRow('')
})

mainTheadCreate.addEventListener('click', async function () {
  sortFlag = 'createdAt'
  sortDir = !sortDir
  document.querySelector('.main__table__create').classList.toggle('arrow-top')
  await createRow('')
})

mainTheadChange.addEventListener('click', async function () {
  sortFlag = 'updatedAt'
  sortDir = !sortDir
  document.querySelector('.main__table__update').classList.toggle('arrow-top')
  await createRow('')
})




