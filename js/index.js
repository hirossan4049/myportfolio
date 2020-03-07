var $section = $('.box'); // 各スライド
var $pager = $('#js-pager'); // ページャー枠

// scrollifyのオプション設定
var option = {
    section: '.box',
    easing: "swing",
    scrollSpeed: 600,
    scrollbars: true,
    before: function (index, section) {
        setCurrent(index); // 現在のsectionにクラスを設定
        pagerCurrent(index); // ページャーに対応する順番にクラス名を付与
    },
    afterRender: function () {
        createPager(); // ページャーの作成
        setCurrent(); // 現在のsectionにクラスを設定
    }
};

$(function () {
    $.scrollify(option); // scrollifyの実行
});


// ==============================
// functions
// ------------------------------

// 現在のsectionにクラスを設定
function setCurrent(index = 0) {
    // 一旦、すべてのsectionのクラスをとる
    $section.removeClass('is-show');
    // 現在のsectionのみにクラスを付与
    $section.eq(index).addClass('is-show');
}

// ページャーに対応する順番にクラス名を付与
function pagerCurrent(index = 0) {
    var $li = $pager.find('li');
    $li.removeClass('is-current');
    $li.eq(index).addClass('is-current');
}

// // ページャーの作成
function createPager() {
    $section.each(function (i, e) {
        // ページ内リンク先の作成
        var sectionName = $(e).attr('data-section-name');
        // 最初のliにはクラスを付与
        var addClass = '';
        if (i === 0) {
            addClass = 'is-current';
        }
        // liのHTML作成
        var html = '';
        html += '<li class="' + addClass + '">';
        html += '<a href="#' + sectionName + '"></a>';
        html += '</li>';
        $pager.append(html);
    });

    pagerLink();
}

// ページャーでaタグをクリックされたらスクロールする
function pagerLink() {
    $pager.find('a').on('click', function () {
        $.scrollify.move($(this).attr("href"));
    });
}


var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
    setTimeout(function () {
        cw[i].className = 'letter out';
    }, i * 80);
}

function animateLetterIn(nw, i) {
    setTimeout(function () {
        nw[i].className = 'letter in';
    }, 340 + (i * 80));
}

function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }

    wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 2000);


