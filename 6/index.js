function handleCellClick(event) {
  if ($.contains(event.currentTarget, event.target) || event.target === event.currentTarget) {
    const $p = $(event.currentTarget).find('p')
    
    const newValue = prompt('Введите новое значение:')
    
    $p.text(newValue)
  }
}

$('.add-btn').click(function() {
  const $row = $('<tr></tr>')
  
  $row.append('<td><p></p></td>')
  $row.append('<td><p></p></td>')
  
  $row.find('td').click(handleCellClick)
  
  $('table').append($row)
})

