function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const header = document.querySelector('.header');
  const rightSection = document.querySelector('.right-section');

  sidebar.classList.toggle('active'); 
  header.classList.toggle('active');
  rightSection.classList.toggle('active');
}
