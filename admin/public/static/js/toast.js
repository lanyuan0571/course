Toast = {
  success: function (message) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 10000
    })
  },

  error: function (message) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: message,
      showConfirmButton: false,
      timer: 5000
    })
  },

  warning: function (message) {
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: message,
      showConfirmButton: false,
      timer: 5000
    })
  }
};
// const Toast = Swal.mixin({
//     toast: true,
//     position: 'top-end',
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//         toast.addEventListener('mouseenter', Swal.stopTimer)
//         toast.addEventListener('mouseleave', Swal.resumeTimer)
//     }
// });
// Toast.fire({
//     icon: 'success',
//     title: 'Signed in successfully'
// });
// toast = {
//     success: function (message) {
//         Toast.fire({
//             icon: 'success',
//             title: message
//         });
//     },
//     error: function (message) {
//         Toast.fire({
//             icon: 'success',
//             title: message
//         });
//     },
//     warning: function (message) {
//         Toast.fire({
//             icon: 'success',
//             title: message
//         });
//     }
// };
