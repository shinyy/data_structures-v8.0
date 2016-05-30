$(function(){
	function BinarySearchTree(){
		var node=function(key){
			this.key=key;
			this.left=null;
			this.right=null;
			
		};
		var root=null;
		this.insert=function(key){
				var newnode=new node(key);//1
				if(root===null){//2
					root=newnode;
				}else{
					insertnode(root,newnode);//3
				}
			};
		var insertnode=function(node,newnode){
			if(newnode.key<node.key){//4
				if(node.left===null){//5
					node.left=newnode;//6
				}else{
					insertnode(node.left,newnode);//7
				}
			}else{
				if(node.right===null){//8
					node.right=newnode;//9
				}else{
					insertnode(node.right,newnode);//10
				}
			}
		};
		this.inordertraverse=function(callback){
			inordertraversenode(root,callback);
		};
		var inordertraversenode=function(node,callback){
			if(node!==null){
				inordertraversenode(node.left,callback);
				callback(node.key);
				inordertraversenode(node.right,callback);
			}
		}
		
	};
	
	var tree=new BinarySearchTree();
	tree.insert(11)
	tree.insert(7)
	tree.insert(15)
	tree.insert(5)
	tree.insert(3)
	tree.insert(9);
	tree.insert(8);
	tree.insert(10);
	tree.insert(13);
	tree.insert(12);
	tree.insert(14);
	tree.insert(20);
	tree.insert(18);
	tree.insert(25);
	console.log(tree);
	
	function printerNode(val){
		console.log(val);
	}
	tree.inordertraverse(printerNode)
})
	
