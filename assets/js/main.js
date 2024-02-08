const data = [
  {
    imgurl: "https://envytheme.ir/dovi/rtl/assets/images/svg/features-5.svg",
    title: "از مرکز یادگیری هوش مصنوعی دیدن کنید",
  },
  {
    imgurl: "https://envytheme.ir/dovi/rtl/assets/images/svg/features-6.svg",
    title: "داده ها - تجربیات مشتری محور",
  },
  {
    imgurl: "https://envytheme.ir/dovi/rtl/assets/images/svg/features-7.svg",
    title: "اطلاعات بینش آگاهانه را ارائه دهید",
  },
  {
    imgurl: "https://envytheme.ir/dovi/rtl/assets/images/svg/features-8.svg",
    title: "بهینه سازی فرآیند کسب و کار",
  },
];

const row = document.getElementById("row");
data.map((item) => {
  const col = document.createElement("div");
  col.classList.add("col-md-3", "box-services", "mt-5", "py-3");
  col.innerHTML = `
  <img
    class="logo"
    src="${item.imgurl}"
    alt="logo"
  />
  <h3 class="learn-more">${item.title}</h3>
  <a class="learn-more-btn" href="#">بیشتر بدانید</a>
  
  `;
  row.appendChild(col);
});
