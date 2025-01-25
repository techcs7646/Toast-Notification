const toastContainer = document.querySelector(".toast-container");

const toastTypes = {
  success: {
    icon: "✓",
    message: "Success! Operation completed.",
  },
  error: {
    icon: "✕",
    message: "Error! Something went wrong.",
  },
  warning: {
    icon: "⚠",
    message: "Warning! Please be careful.",
  },
  info: {
    icon: "ℹ",
    message: "Info! Here is some information.",
  },
};

function createToast(type) {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const toastContent = document.createElement("div");
  toastContent.className = "toast-content";

  const icon = document.createElement("span");
  icon.className = "toast-icon";
  icon.textContent = toastTypes[type].icon;

  const message = document.createElement("span");
  message.className = "toast-message";
  message.textContent = toastTypes[type].message;

  const closeBtn = document.createElement("span");
  closeBtn.className = "toast-close";
  closeBtn.textContent = "×";

  toastContent.appendChild(icon);
  toastContent.appendChild(message);
  toast.appendChild(toastContent);
  toast.appendChild(closeBtn);

  toastContainer.appendChild(toast);

  // Auto remove after 5 seconds
  const timeout = setTimeout(() => removeToast(toast), 5000);

  // Remove on click
  toast.onclick = () => {
    clearTimeout(timeout);
    removeToast(toast);
  };

  // Remove on close button click
  closeBtn.onclick = (e) => {
    e.stopPropagation();
    clearTimeout(timeout);
    removeToast(toast);
  };
}

function removeToast(toast) {
  toast.classList.add("removing");
  toast.addEventListener("animationend", () => {
    toast.remove();
  });
}

// Add click event listeners to buttons
document.getElementById("success-btn").onclick = () => createToast("success");
document.getElementById("error-btn").onclick = () => createToast("error");
document.getElementById("warning-btn").onclick = () => createToast("warning");
document.getElementById("info-btn").onclick = () => createToast("info");
