

module.exports = function printInventory (inputs){
	let result = '***<没钱赚商店>购物清单***\n';
	let count = 0;
	let total = 0;
	let temp = [];
	let lastItem;

	for (let i=0; i<inputs.length; i++)
	{
		if(!temp.includes(inputs[i].barcode))
		{
			temp.push(inputs[i].barcode);
		}
	}

	for (let i=0; i<temp.length; i++)
	{
		for (let j=0; j<inputs.length; j++)
		{
			if(temp[i]===(inputs[j].barcode)){
				count++;
				lastItem = j;

			}
		}

		result += '名称：'+inputs[lastItem].name+'，数量：'+count+inputs[lastItem].unit+'，单价：'+inputs[lastItem].price.toFixed(2)+'(元)，小计：'+(count*inputs[lastItem].price).toFixed(2)+'(元)\n';
		total += count * inputs[lastItem].price;
		count=0;
	}
	result +='----------------------\n' + '总计：'+total.toFixed(2)+'(元)\n' + '**********************';
	return result;



}

