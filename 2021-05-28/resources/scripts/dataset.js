let Lis = window.document.body.querySelectorAll(':scope > ul > li');
let info = window.document.body.querySelector(':scope > div.info');

Lis.forEach(li => {
    li.addEventListener('click', () => {
        let name = li.innerText;

        let age = li.dataset.age ?? '(빈 값)';
        // 삼항식(Trinomial Expression) : c ? a : b >>> c 조건이 true 일때 a, 거짓일 때 b 값을 반환한다.
        // 'data-'로 시작하는 속성 값은 요소 변수의 dataset 속성에서 (뒤에) 이름을 적어서 바로 가져올 수 있다.
        let blood = li.dataset.blood ?? '(빈 값)';
        //  x ?? y : x가 정의되지 않았을 때 대신 y 값을 이용 하겠다 라는 뜻

        // if (age === undefined) {
        //     age = '(빈 값)';
        // }
        // if (blood === undefined) {
        //     blood = '(빈 값)';
        // }
        
        info.innerText = `이름 : ${name}\n나이 : ${age}\n혈액형 : ${blood}`;
    });
});

info.innerText = '대기중';