    function initMap() {

      //初期表示位置
      let latlng = new google.maps.LatLng(38.60, 139.5);
      //デザイン
      let styles = [
           {
            stylers: [
             { "saturation": 0 },
             { "lightness": 0 }
            ]
           }
          ];

      let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5.5,
          styles: styles,
          center: latlng
      });
      let transitLayer = new google.maps.TransitLayer();
      transitLayer.setMap(map);

//複数マーカー ここから
      <% @posts.each do |post|%>
        ( function() {
          let markerLatLng = { lat: <%= post.lat %>, lng: <%= post.lng %> }; // 緯度経度のデータ作成
          let marker = new google.maps.Marker({
            position: markerLatLng,
            map: map
          });
//マーカーをクリックしたとき、詳細情報を表示
          let infowindow = new google.maps.InfoWindow({
            position: markerLatLng,
            content: "<a href='<%= post_url(post.id) %>' target='_blank'><%= post.text %></a>"
          }); //ここで詳細ページへのリンクを表示させる
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });

       })();
      <% end %>
      //複数マーカー ここまで
  }

<script src="https://maps.googleapis.com/maps/api/js?key=<%= ENV['GOOGLE_MAP_KEY'] %>&callback=initMap" async defer></script>

