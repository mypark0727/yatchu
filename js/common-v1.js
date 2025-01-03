$(document).ready(function () {
	console.log('@@@@@@@@');
  
	// DOM 참조
	let tableDom = document.querySelector('.tableDefault');
	let tbody1 = tableDom.querySelector('.tbody1');
	let tbody2 = tableDom.querySelector('.tbody2');
	let tbody3 = tableDom.querySelector('.tbody3');
	let tfoot1 = tableDom.querySelector('.tfoot1');
  
	// 데이터 저장 변수
	let tbodyData = {
	  tbody1: Array(6).fill({ num0: 0, num1: 0, num2: 0, num3: 0 }),
	  tbody2: [{ num0: 0, num1: 0, num2: 0, num3: 0 }],
	  tbody3: Array(7).fill({ num0: 0, num1: 0, num2: 0, num3: 0 })
	};
  
	// 합계 저장 변수
	let sumData = { tbody1: {}, tbody2: {}, tbody3: {} };
  
	// 총합 변수
	let totalData = { player0: 0, player1: 0, player2: 0, player3: 0 };
  
	// 공통 함수: 합계 계산
	function calculateSum(dataArray) {
	  return dataArray.reduce(
		(sum, row) => {
		  sum.sum0 += row.num0 || 0;
		  sum.sum1 += row.num1 || 0;
		  sum.sum2 += row.num2 || 0;
		  sum.sum3 += row.num3 || 0;
		  return sum;
		},
		{ sum0: 0, sum1: 0, sum2: 0, sum3: 0 }
	  );
	}
  
	// 공통 함수: 테이블 업데이트
	function updateTableSum(tbodyKey, tbodyElement) {
	  sumData[tbodyKey] = calculateSum(tbodyData[tbodyKey]);
	  let inputs = tbodyElement.querySelectorAll('input');
	  inputs.forEach((input, i) => {
		input.value = sumData[tbodyKey][`sum${i}`];
	  });
	  updateTotalData();
	}
  
	// 총합 업데이트
	function updateTotalData() {
	  totalData = { player0: 0, player1: 0, player2: 0, player3: 0 };
	  Object.values(tbodyData).forEach(tbody => {
		tbody.forEach(row => {
		  totalData.player0 += row.num0 || 0;
		  totalData.player1 += row.num1 || 0;
		  totalData.player2 += row.num2 || 0;
		  totalData.player3 += row.num3 || 0;
		});
	  });
  
	  let inputs = tfoot1.querySelectorAll('input');
	  inputs.forEach((input, i) => {
		input.value = totalData[`player${i}`];
	  });
	}
  
	// 이벤트 추가 함수
	function addChangeEvent(tbodyKey, tbodyElement) {
	  tbodyElement.querySelectorAll('tr').forEach((row, trIndex) => {
		row.querySelectorAll('td').forEach((cell, tdIndex) => {
		  let select = cell.querySelector('select');
		  if (select) {
			select.addEventListener('change', function () {
			  tbodyData[tbodyKey][trIndex][`num${tdIndex}`] = Number(this.value);
			  console.log(`${tbodyKey} Data`, tbodyData[tbodyKey]);
			  updateTableSum(tbodyKey, tbodyElement);
			});
		  }
		});
	  });
	}
  
	// 각 테이블에 이벤트 추가
	addChangeEvent('tbody1', tbody1);
	addChangeEvent('tbody2', tbody2);
	addChangeEvent('tbody3', tbody3);
  });