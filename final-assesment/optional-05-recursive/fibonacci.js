function fibonacci(n) {
  if (n === 0) {
    return [0]; // kasus dasar
  } else if (n === 1) {
    return [0, 1]; // kasus dasar
  } else {
    const series = fibonacci(n - 1); // rekursi untuk elemen sebelumnya
    series.push(series[series.length - 1] + series[series.length - 2]); // menambahkan elemen baru
    return series;
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
