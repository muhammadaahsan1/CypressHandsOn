import "cypress-file-upload"
describe("File Upload", ()=>{
    it("Single File Upload", ()=>{
        cy.visit('http://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').attachFile('1.jpg')

        cy.get('#file-upload').attachFile({filePath:'1.jpg', fileName:'myfile.jpg'}) // Rename file while Uploading
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it.only("File Upload - Drag and Drop", ()=>{
        cy.visit('http://the-internet.herokuapp.com/upload')
   
        cy.get('#drag-drop-upload').attachFile("1.jpg", {subjectType:'drag-n-drop'}) 

        cy.wait(5000)
  

        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('1.jpg')

    })

    it("Upload Multiple files - Drag and Drop", () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
      
        const filesToUpload = ["1.jpg", "2.jpg", "3.jpg"];
        cy.get('#filesToUpload').attachFile(filesToUpload, { multiple: true });
      })
      

    it.only("File Upload - Shadow DOM", ()=>{
        cy.visit('https://htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile("1.jpg")

        cy.get('.smart-item-name', {includeShadowDom:true}).contains("1.jpg")


    })
})