function factorial(n) {
  if (n === 0) {
    return 1; // kasus dasar
  } else {
    return n * factorial(n - 1); // rekursi
  }
}

// Jangan hapus kode di bawah ini!
export default factorial;
