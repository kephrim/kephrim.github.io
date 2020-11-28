class Store{
	list=[]
	id=0
	constructor(){
		this.getData()
	}
	getData(){
		try {
		    const data = uni.getStorageSync('data');
		    if(data){
		    	this.list=JSON.parse(data)
		    	this.id=this.list.length
		    }
		} catch (e) {
		    // error
		}
		
	}
	saveData(val){
		val.id=this.id++;
		console.log(val.id,this.id)
		this.list.push(val)
		try {
		    uni.setStorageSync('data', this.list);
		} catch (e) {
		    // error
		}
		this.getData()
		
		
	}
	clear(){
		uni.clearStorage()
		alert("清空成功")
	}
	removeData(){
		
	}
	update(){
		var arr=this.list.map(item=>{
			item.status+=1
			return item
		})
		try {
		    uni.setStorageSync('data', this.list);
		} catch (e) {
		    // error
		}
		alert("打卡完成")
	}
}


export default new Store()