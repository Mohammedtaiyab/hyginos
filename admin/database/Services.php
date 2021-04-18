<?php
class Services
{
	public $db=null;
	function __construct(DBcontroller $db)
	{
		if(!isset($db->con))return null;
		$this->db=$db;
	}
	public function services(){
		$result =$this->db->con->query("SELECT * FROM services");
		$resultArray=array();
		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
			$resultArray[]=$item;
			# code...
		}
		return $resultArray;
	}
	public function webservices(){
		$result =$this->db->con->query("SELECT * FROM services WHERE Status=1");
		$resultArray=array();
		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
			$resultArray[]=$item;
			# code...
		}
		return $resultArray;
	}
	public function reviews(){
		$result =$this->db->con->query("SELECT * FROM reviews");
		$resultArray=array();
		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
			$resultArray[]=$item;
			# code...
		}
		return $resultArray;
	}
	public function reviewsweb(){
		$result =$this->db->con->query("SELECT * FROM reviews WHERE Status=1");
		$resultArray=array();
		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
			$resultArray[]=$item;
			# code...
		}
		return $resultArray;
	}
		public function getDataid($id){
		$result =$this->db->con->query("SELECT * FROM services WHERE ID=".$id);
		$resultArray=array();
		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
			$resultArray[]=$item;
			# code...
		}
		return $resultArray;
	}

		
	public function addservice($title,$paragraph,$new_filename){
	$result =$this->db->con->query("INSERT INTO services(Title,Paragraph,Image,Status) VALUES ('".$title."','".$paragraph."','".$new_filename."',1)");
	return $result;
}






public function servicestatus($id,$status){
	$result =$this->db->con->query("UPDATE services SET Status='".$status."' WHERE ID='".$id."'");
	return $result;
}

public function reviewstatus($id,$status){
	$result =$this->db->con->query("UPDATE reviews SET Status='".$status."' WHERE ID='".$id."'");
	return $result;
}
public function serviceupdate($id,$title,$paragraph,$image){
	if(!$image==''|| !$image==null){
	$sql="UPDATE services SET Title='".$title."',Paragraph='".$paragraph."',Image='".$image."' WHERE ID=".$id;
		}else{
			$sql="UPDATE services SET Title='".$title."',Paragraph='".$paragraph."' WHERE ID=".$id;
	
		}

		$result = mysqli_query($this->db->con,$sql) or die(mysqli_connect_errno()."Data cannot inserted 2");
	return $result;
}

public function addreview($rate,$revby,$paragraph){
	$result =$this->db->con->query("INSERT INTO reviews(Rate,Review,Give_by,Status) VALUES ('".$rate."','".$paragraph."','".$revby."',1)");
	return $result;
}

public function getreviewid($id){
	$result =$this->db->con->query("SELECT * FROM reviews WHERE ID=".$id);
	$resultArray=array();
	while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
		$resultArray[]=$item;
		# code...
	}
	return $resultArray;
}
		public function updatereview($id,$rate,$reviewby,$review){
		$result =$this->db->con->query("UPDATE reviews SET Rate='".$rate."',Review='".$review."',Give_by='".$reviewby."' WHERE ID=".$id);
		return $result;
	}



	// public function insersersec($id,$title,$paragraph,$new_filename){
	
	// 	$sql="INSERT INTO services_section(Service_ID,Title,Description,Image) VALUES (".$id.",'".$title."','".$paragraph."','".$new_filename."')";
	// 	echo $sql;
	// 		$result = mysqli_query($this->db->con,$sql) or die(mysqli_connect_errno()."Data cannot inserted 2");
	// 	return $result;
	// }
	// 	public function servicessection($id){
	// 	$result =$this->db->con->query("SELECT * FROM services_section WHERE Service_ID=".$id);
	// 	$resultArray=array();
	// 	while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
	// 		$resultArray[]=$item;
	// 		# code...
	// 	}
	// 	return $resultArray;
	// }
	// public function servicessectionbyid($id){
	// 	$result =$this->db->con->query("SELECT * FROM services_section WHERE ID=".$id);
	// 	$resultArray=array();
	// 	while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
	// 		$resultArray[]=$item;
	// 		# code...
	// 	}
	// 	return $resultArray;
	// }

}


?>