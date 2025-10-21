const btnNavs = document.querySelectorAll('.btn-nav');
const sections = document.querySelectorAll('section');

const Top1 = sections[1].offsetTop;
const Top2 = sections[2].offsetTop;
const Top3 = sections[3].offsetTop;

btnNavs[1].onclick = () => {
    window.scroll({
        top: Top1,
        behavior: "smooth"
    })
}
btnNavs[2].onclick = () => {
    window.scroll({
        top: Top2,
        behavior: "smooth"
    })
}
btnNavs[3].onclick = () => {
    window.scroll({
        top: Top3,
        behavior: "smooth"  
    })
}


// 뷰포트에 들어오면 is-visible 속성 부여
const rvItem = new IntersectionObserver((items, item) => {
    items.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-visible');
        item.unobserve(e.target); // 한번만
    });
}, {
    threshold: 0.15, // 15%만 보여도 트리거
    rootMargin: '0px 0px -10% 0px' // 약간 일찍/자연스럽게
});

document.querySelectorAll('.reveal').forEach(el => rvItem.observe(el));

// 순차 딜레이
document.querySelectorAll('.cardSection').forEach(group => {
    group.querySelectorAll('.reveal').forEach((el, i) => {
        el.style.transitionDelay = `${i * 200}ms`; // 0, 120, 240...
        rvItem.observe(el);
    });
});
document.querySelectorAll('#banner').forEach(group => {
    group.querySelectorAll('.reveal').forEach((el, i) => {
        el.style.transitionDelay = `${i * 200}ms`; // 0, 120, 240...
        rvItem.observe(el);
    });
});