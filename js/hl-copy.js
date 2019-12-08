//代码高亮
hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad({
    singleLine: true
});


//代码复制
var snippets = document.querySelectorAll('pre>code');
var htmlCopyButton = `<button class="codecopy-btn tooltipped tooltipped-sw" aria-label="Copy to clipboard"><i class="fa fa-clipboard" aria-hidden="true"></i></button>`;

snippets.forEach(snippet => {
    var pre = snippet.parentNode;
    var pre_parent = pre.parentNode;

    var wrapper = document.createElement('div');

    pre_parent.replaceChild(wrapper, pre);
    wrapper.appendChild(pre);

    wrapper.classList.add('code-highlight');
    wrapper.firstChild.insertAdjacentHTML('beforebegin', htmlCopyButton);
    var class0 = (snippet.classList[0] || 'code')
    var lang = (class0.replace("language-", "") || 'code').toUpperCase();
    wrapper.setAttribute('data-lang', lang);
});

// Add copy to clipboard functionality and user feedback
var clipboard = new ClipboardJS('.codecopy-btn', {
    target: trigger => {
        return trigger.nextSibling;
    },
});

clipboard.on('success', e => {
    e.trigger.setAttribute('aria-label', 'Copied!');
    e.clearSelection();
});

// Replace tooltip message when mouse leaves button
// and prevent page refresh after click button
var btns = document.querySelectorAll('.codecopy-btn');

btns.forEach(btn => {
    btn.addEventListener('mouseleave', e => {
        e.target.setAttribute('aria-label', 'Copy to clipboard');
        e.target.blur();
    });

    btn.addEventListener('click', e => {
        e.preventDefault();
    });
});

//图片放大
$("img").click(function () {
    layer.photos({
        photos: this.parentNode,
        shift: -1,
        tab: function (pic, layero) {
            imgs = $(".layui-layer-shade")
            for (i = 1; i < imgs.length; i++) {
                $(".layui-layer.layui-layer-page.layui-layer-photos")[0].remove()
                $(".layui-layer-shade")[0].remove()

            }
        }
    });
});
