function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const header = document.querySelector('.header');

  sidebar.classList.toggle('active'); 
  header.classList.toggle('active');
}