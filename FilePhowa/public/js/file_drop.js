var file_drop = file_drop || {};


(function(namespace) {


    namespace.fileSelectHandler = function fileSelectHandler(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;  // FileList object.
      // files is a FileList of File objects. List some properties.
      var output = [];
      for (var i = 0, f; f = files[i]; i++) {
        output.push(
          '<li><strong>',
          escape(f.name),
          '</strong> (',
          f.type || 'n/a',
          ') - ',
          f.size,
          ' bytes, last modified: ',
          f.lastModifiedDate.toLocaleDateString(),
          '</li>');
      }
      document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
    }

    namespace.dragOverHandler = function dragOverHandler(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    }


})(file_drop);



