const fetchPosts = async () => {
  try {
    const res = await axios.get("./pages/header/header-nav.html");
    const html = res.data;
    const placeholder = document.getElementById("header-nav-placeholder");
    placeholder.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
};

fetchPosts();
