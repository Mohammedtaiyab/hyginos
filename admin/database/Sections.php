<?php
class Sections
{
	public $db=null;
	function __construct(DBcontroller $db)
	{
		if(!isset($db->con))return null;
		$this->db=$db;
	}
	public function getData($section){
		$result =$this->db->con->query("SELECT * FROM sections WHERE Page='".$section."'");
		$resultArray=array();
		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
			$resultArray[]=$item;
			# code...
		}
		return $resultArray;
	
	}
		public function getAllprojects(){
		$result =$this->db->con->query("SELECT * FROM projects");
		$resultArray=array();
		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
			$resultArray[]=$item;
			# code...
		}
		return $resultArray;
	
	}

	public function getprojectid($id){
		$result =$this->db->con->query("SELECT * FROM projects WHERE ID=".$id);
		$resultArray=array();
		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
			$resultArray[]=$item;
			# code...
		}
		return $resultArray;
	
	}


	public function addproject($title,$paragraph,$new_filename){
		$sql="INSERT INTO projects(Title,Paragraph,Bg_img,Status) VALUES ('$title','$paragraph','$new_filename',1)";
		$result = mysqli_query($this->db->con,$sql) or die(mysqli_error($this->db->con));
		return $result;
	}


	public function projectupdate($id,$title,$paragraph,$image){
		if(!$image==''|| !$image==null){
		$sql="UPDATE projects SET Title='".$title."',Paragraph='".$paragraph."',Bg_img='".$image."' WHERE ID=".$id;
			}else{
				$sql="UPDATE projects SET Title='".$title."',Paragraph='".$paragraph."' WHERE ID=".$id;
		
			}
	
			$result = mysqli_query($this->db->con,$sql) or die(mysqli_connect_errno()."Data cannot inserted 2");
		return $result;
	}
	

	public function changeproject($id,$status){
		$result =$this->db->con->query("UPDATE projects SET Status='".$status."' WHERE Id=".$id);
		return $result;	}


		public function getAllprojectsweb(){
			$result =$this->db->con->query("SELECT * FROM projects WHERE Status=1");
			$resultArray=array();
			while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
				$resultArray[]=$item;
				# code...
			}
			return $resultArray;
		
		}








// 		public function getDatabyid($id){
// 		$result =$this->db->con->query("SELECT * FROM sections WHERE ID=".$id);
// 		$resultArray=array();
// 		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
// 			$resultArray[]=$item;
// 			# code...
// 		}
// 		return $resultArray;
	
// 	}
// 	public function update($section,$paragraph,$id){
// 		$result =$this->db->con->query("UPDATE sections SET Section='".$section."', Paragraph='".$paragraph."' WHERE ID=".$id);
// 		return $result;
	
// 	}
	

// 	public function partnerts(){
// 		$result =$this->db->con->query("SELECT * FROM partners");
// 		$resultArray=array();
// 		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
// 			$resultArray[]=$item;
// 			# code...
// 		}
// 		return $resultArray;
	
// 	}

// 	public function addclients($name,$new_filename){
// 		$result =$this->db->con->query("INSERT INTO clients(Name,Status,ClientLogo) VALUES ('$name',1,'$new_filename')");
// 		return $result;

// 	}

	





}


?>