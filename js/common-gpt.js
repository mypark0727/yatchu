

$(document).ready(function(){
	console.log('@@@@@@@@');

	let tableDom = document.querySelectorAll('.tableDefault')[0];
	let thead1 = tableDom.querySelector('.thead1');

	let tbody1 = tableDom.querySelector('.tbody1');
	let tbody2 = tableDom.querySelector('.tbody2');
	let tbody3 = tableDom.querySelector('.tbody3');
	let tfoot1 = tableDom.querySelector('.tfoot1');

	let selectAll = document.querySelectorAll('select');
	let inputAll = document.querySelectorAll('input[type="number"]')

	// 데이터값 저장될 변수
	let tbody1Data = [
		{num0:0,num1:0,num2:0,num3:0},
		{num0:0,num1:0,num2:0,num3:0},
		{num0:0,num1:0,num2:0,num3:0},
		{num0:0,num1:0,num2:0,num3:0},
		{num0:0,num1:0,num2:0,num3:0},
		{num0:0,num1:0,num2:0,num3:0},
	];
	let tbody2Data = [
		{num0:0,num1:0,num2:0,num3:0}

	];
	let tbody3Data = [
		{num0:0,num1:0,num2:0,num3:0},
		{num0:0,num1:0,num2:0,num3:0},
		{num0:0,num1:0,num2:0,num3:0},
		{num0:0,num1:0,num2:0,num3:0},
		{num0:0,num1:0,num2:0,num3:0},
		{num0:0,num1:0,num2:0,num3:0},
		{num0:0,num1:0,num2:0,num3:0},
	];

	// 합계저장변수
	let tbody1SumData;
	let tbody2SumData;
	let tbody3SumData;

	// 총합 변수
	let totalData = {player0:0, player1:0, player2:0, player3:0};

	selectAll.forEach(function(item){
		item.addEventListener('change',function(e){
			console.log('#######');
			//updateTotalData();
		});
	});

	// tbody1
	tbody1.querySelectorAll('tr').forEach((item,trIndex)=>{
		let _trIndex = trIndex;
		item.querySelectorAll('td').forEach((tr,tdIndex)=>{
			let _tr = tr;
			let _tdIndex = tdIndex; 
			let _select = tr.querySelector('select');

			_select.addEventListener('change',function(e){
				let _value = this.value;
				let _keyName = 'num' + _tdIndex;
				tbody1Data[_trIndex][_keyName] = Number(_value);

				console.log('tbody1Data');
				console.log(tbody1Data);

				tbody1Sum();
				updateTotalData();
			})

		})
	})

	function tbody1Sum () {
		tbody1SumData = {
			sum0:0,
			sum1:0,
			sum2:0,
			sum3:0,
		};

		tbody1Data.forEach((item) => {
			tbody1SumData.sum0 += item.num0;
			tbody1SumData.sum1 += item.num1;
			tbody1SumData.sum2 += item.num2;
			tbody1SumData.sum3 += item.num3;
		});

		let _inputs = tbody2.querySelectorAll('input')
		_inputs.forEach((item,i)=>{
			let _key = 'sum' + i;
			item.value = tbody1SumData[_key];
		})

		console.log('tbody1SumData');
		console.log(tbody1SumData);

		updateTotalData();
	}

	// tbody2
	tbody2.querySelectorAll('tr').forEach((item,trIndex)=>{
		if (trIndex === 1) {
			item.querySelectorAll('td').forEach((tr,tdIndex)=>{
				let _tr = tr;
				let _tdIndex = tdIndex; 
				let _select = tr.querySelector('select');

				_select.addEventListener('change',function(e){
					let _value = this.value;
					let _keyName = 'num' + _tdIndex;
					tbody2Data[0][_keyName] = Number(_value);

					console.log('tbody2Data');
					console.log(tbody2Data);

					tbody2Sum();
					updateTotalData();
				})

			})
		}
	})

	function tbody2Sum () {
		tbody2SumData = {
			sum0:0,
			sum1:0,
			sum2:0,
			sum3:0,
		};

		tbody2Data.forEach((item) => {
			tbody2SumData.sum0 += item.num0;
			tbody2SumData.sum1 += item.num1;
			tbody2SumData.sum2 += item.num2;
			tbody2SumData.sum3 += item.num3;
		});

		console.log('tbody2SumData');
		console.log(tbody2SumData);
	}



	// tbody3
	tbody3.querySelectorAll('tr').forEach((item,trIndex)=>{
		let _trIndex = trIndex;
		item.querySelectorAll('td').forEach((tr,tdIndex)=>{
			let _tr = tr;
			let _tdIndex = tdIndex; 
			let _select = tr.querySelector('select');

			_select.addEventListener('change',function(e){
				let _value = this.value;
				let _keyName = 'num' + _tdIndex;
				tbody3Data[_trIndex][_keyName] = Number(_value);

				console.log('tbody3Data');
				console.log(tbody3Data);

				tbody3Sum();
				updateTotalData();
			})

		})
	})

	function tbody3Sum () {
		tbody3SumData = {
			sum0:0,
			sum1:0,
			sum2:0,
			sum3:0,
		};

		tbody3Data.forEach((item) => {
			tbody3SumData.sum0 += item.num0;
			tbody3SumData.sum1 += item.num1;
			tbody3SumData.sum2 += item.num2;
			tbody3SumData.sum3 += item.num3;
		});

		console.log('tbody3SumData');
		console.log(tbody3SumData);
	}

	// 합산 함수
	function updateTotalData() {
		// 초기화
		totalData = {player0: 0, player1: 0, player2: 0, player3: 0};
		
		// 배열들을 합산
		[tbody1Data, tbody2Data, tbody3Data].forEach(tbody => {
			tbody.forEach(row => {
				totalData.player0 += row.num0;
				totalData.player1 += row.num1;
				totalData.player2 += row.num2;
				totalData.player3 += row.num3;
			});
		});

		tfoot1.querySelectorAll('tr > td').forEach((_td, i)=>{
			let _input = _td.querySelector('input');
			let _key = 'player' + i;
			_input.value = totalData[_key];
		});
		

	}

});