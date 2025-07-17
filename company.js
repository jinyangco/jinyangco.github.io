// Daum 지도 객체 생성
const map = new daum.roughmap.Lander({
  "timestamp": "1752652677289",
  "key": "5q885irypsv",
  "mapWidth": "100%",
  "mapHeight": "400"
});
map.render();

// 창 크기 변경 시 지도 리사이즈 트리거
window.addEventListener("resize", function () {
  setTimeout(function () {
    const mapFrame = document.querySelector('.root_daum_roughmap_landing iframe');
    if (mapFrame && mapFrame.contentWindow) {
      mapFrame.contentWindow.dispatchEvent(new Event('resize'));
    }
  }, 300);
});
