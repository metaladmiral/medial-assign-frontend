const ALERT_TIMEOUT = 10000;

export async function addPostFormEvent(e) {
  e.preventDefault();

  document.getElementById("loading_modal").showModal();

  const backend_server_url = import.meta.env.VITE_BACKEND_SERVER_URL;
  const url = backend_server_url + "create-post";

  const fd = new FormData();
  fd.set("title", e.target[0].value);
  fd.set("content", e.target[1].value);
  if (e.target[2].files[0] != undefined) {
    fd.set("img", e.target[2].files[0]);
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      body: fd,
    });

    if (!response.ok) {
      document.getElementById("error_alert").style.display = "flex";
      setTimeout(() => {
        document.getElementById("error_alert").style.display = "none";
      }, ALERT_TIMEOUT);
      return;
    }

    const result = await response.json();
    if (result.success) {
      document.getElementById("success_alert").style.display = "flex";
      setTimeout(() => {
        document.getElementById("success_alert").style.display = "none";
      }, ALERT_TIMEOUT);
    }
  } catch (error) {
    document.getElementById("error_alert").style.display = "flex";
    setTimeout(() => {
      document.getElementById("error_alert").style.display = "none";
    }, ALERT_TIMEOUT);
  }

  document.getElementById("loading_modal").close();
}
