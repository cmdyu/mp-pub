setTimeout(() => {
    const content = document.querySelector("#cke_1_contents > iframe").contentWindow.document.body.innerHTML
    window.editorxx.setData(content)

    setTimeout(() => {
        document.querySelector("#moreDiv > div.el-form-item.mb8.mt16.form-item-flex.required.is-no-asterisk > div > div > div.mark_selection_title_el_tag > button > span").click()
        const tagInput = document.querySelector("#moreDiv > div.el-form-item.mb8.mt16.form-item-flex.required.is-no-asterisk > div > div > div.mark_selection_box > div.mark_selection_box_header > div > div.el-input.el-input--small.el-input--suffix > input")
        tagInput.value = 'web hacks'
        tagInput.dispatchEvent(new Event('input'))
        setTimeout(() => {
            tagInput.dispatchEvent(new KeyboardEvent('keydown', {
                code: 'Enter',
                key: 'Enter',
                charCode: 13,
                keyCode: 13,
                view: window,
                bubbles: true
            }))

            setTimeout(() => {
                document.querySelector("#moreDiv > div.el-form-item.publish-opt-box.is-no-asterisk > div > div > div.btn-box > button.el-button.btn-outline-danger.ml16.el-button--primary.is-round").click()
            }, 100)
        }, 100)
    }, 500)
}, 6500)