var peer = new Peer();

peer.on('open', function(id) {
    document.getElementById('myId').append(id);
});

function connectPeer() {
  const peerId =   document.getElementById('idText').value;
  var conn = peer.connect(peerId);
}
