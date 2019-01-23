import { programmaticLogin } from '../common/login'


Cypress.Commands.add('loginWithSuperAdminUser', async () => {
  await programmaticLogin()
})

Cypress.Commands.add('uploadFile', (fileName, selector) => {
    cy.get(selector).then(async subject => {

           cy.fixture(fileName, 'base64').then(async (content) => {
              const blob = b64toBlob(content, 'image/png')
              // const fileAsUrl = await readFileAsDataUrl(blob)

             const testFile = new File([blob],
               'uploaded_by_cypress.png',
               {type: "image/png", lastModifiedDate: new Date()}
             )

              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(testFile);

              const el = subject[0]
              el.files = dataTransfer.files
           })
      })
})

function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || ''
    sliceSize = sliceSize || 512

    let byteCharacters = atob(b64Data)
    let byteArrays = []

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize)

        let byteNumbers = new Array(slice.length)
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i)
        }

        let byteArray = new Uint8Array(byteNumbers)

        byteArrays.push(byteArray)
    }

    let blob = new Blob(byteArrays, { type: contentType })
    blob.lastModifiedDate = new Date()
    return blob
}

function harcodedMarioBlob() {
  const BASE_64_MARIO_IMAGE =
    "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB1klEQVR42n2TzytEURTHv3e8N1joRhZG" +
    "zJsoCjsLhcw0jClKWbHwY2GnLGUlIfIP2IjyY2djZTHSMJNQSilFNkz24z0/Ms2MrnvfvMu8mcfZvPvu" +
    "Pfdzz/mecwgKLNYKb0cFEgXbRvwV2s2HuWazCbzKA5LvNecDXayBjv9NL7tEpSNgbYzQ5kZmAlSXgsGG" +
    "XmS+MjhKxDHgC+quyaPKQtoPYMQPOh5U9H6tBxF+Icy/aolqAqLP5wjWd5r/Ip3YXVILrF4ZRYAxDhCO" +
    "J/yCwiMI+/xgjOEzmzIhAio04GeGayIXjQ0wGoAuQ5cmIjh8jNo0GF78QwNhpyvV1O9tdxSSR6PLl51F" +
    "nIK3uQ4JJQME4sCxCIRxQbMwPNSjqaobsfskm9l4Ky6jvCzWEnDKU1ayQPe5BbN64vYJ2vwO7CIeLIi3" +
    "ciYAoby0M4oNYBrXgdgAbC/MhGCRhyhCZwrcEz1Ib3KKO7f+2I4iFvoVmIxHigGiZHhPIb0bL1bQApFS" +
    "9U/AC0ulSXrrhMotka/lQy0Ic08FDeIiAmDvA2HX01W05TopS2j2/H4T6FBVbj4YgV5+AecyLk+Ctvms" +
    "QWK8WZZ+Hdf7QGu7fobMuZHyq1DoJLvUqQrfM966EU/qYGwAAAAASUVORK5CYII="

  var binary = fixBinary(atob(BASE_64_MARIO_IMAGE))
  return new Blob([binary], {type: 'image/png'})

  function fixBinary(bin) {
    let length = bin.length
    let buf = new ArrayBuffer(length)
    let arr = new Uint8Array(buf)
    for (var i = 0; i < length; i++) {
      arr[i] = bin.charCodeAt(i)
    }
    return buf;
  }
}
