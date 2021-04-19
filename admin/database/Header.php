<?php
class Header
{
	public $db=null;
	function __construct(DBcontroller $db)
	{
		if(!isset($db->con))return null;
		$this->db=$db;
	}

public function getallData(){
		$result =$this->db->con->query("SELECT * FROM home");
		$resultArray=array();
		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
			$resultArray[]=$item;
			# code...
		}
		return $resultArray;
	}
public function update($id,$paragraph,$new_filename){
		if($new_filename==''||$new_filename==null){
$result =$this->db->con->query("UPDATE home SET Title='".$paragraph."' WHERE ID='".$id."'");
		}else{
		$result =$this->db->con->query("UPDATE home SET Title='".$paragraph."',Bg_img='".$new_filename."' WHERE ID='".$id."'");
	}
		return $result;
	}
// 		///////////////////////////////////////////////Why US//////////////////////////////





public function whyus(){
	$result =$this->db->con->query("SELECT * FROM whyus");
	$resultArray=array();
	while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
		$resultArray[]=$item;
		# code...
	}
	return $resultArray;
}
public function webwhyus(){
	$result =$this->db->con->query("SELECT * FROM whyus WHERE Status=1");
	$resultArray=array();
	while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
		$resultArray[]=$item;
		# code...
	}
	return $resultArray;
}


	public function whystatus($id,$status){
		$result =$this->db->con->query("UPDATE whyus SET Status='".$status."' WHERE ID='".$id."'");
		return $result;
	}



	public function addwhyus($title,$paragraph,$new_filename){
		$result =$this->db->con->query("INSERT INTO whyus (Title,Paragraph,icon_img,Status) VALUES('".$title."','".$paragraph."','".$new_filename."',1)");
	
		return $result;
	}


	public function whyusid($id){
		$result =$this->db->con->query("SELECT * FROM whyus WHERE ID='".$id."'");
		$resultArray=array();
		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
			$resultArray[]=$item;
			# code...
		}
		return $resultArray;
	}
	
// 	/////////////////////////////////////////////head////////////////////////////////////////
// 	/////////////////////////////////////////////Login///////////////////////////////////////
	public function login($password){
			$result =$this->db->con->query("SELECT * FROM users WHERE Username='Administrator' AND Password='".$password."'");
			
		if (mysqli_num_rows($result) == 0) {
    	return false;
		}else{
				return true;
		}

	}
// 		/////////////////////////////////////////////Conatct///////////////////////////////////////
	public function whyusupdate($id,$title,$paragraph,$new_filename){
		if($new_filename==''||$new_filename==null){
			$result =$this->db->con->query("UPDATE whyus SET Title='".$title."',Paragraph='".$paragraph."' WHERE ID='".$id."'");
					}else{
					
		$result =$this->db->con->query("UPDATE whyus SET Title='".$title."',Paragraph='".$paragraph."',icon_img='".$new_filename."' WHERE ID='".$id."'");
				}
					return $result;
			
	}
		public function savecontact($name,$phone,$email,$state,$msg){
			$result =$this->db->con->query("INSERT INTO contacts(Name,Phone,Email,State,Messege,Status,Type) VALUES ('".$name."',".$phone.",'".$email."','".$state."','".$msg."','Pending','Contact')");
			return $result;
	}



	public function jobapply($name,$phone,$email,$position,$msg,$cv){
		$result =$this->db->con->query("INSERT INTO contacts(Name,Phone,Email,State,Messege,Status,Type,CV) VALUES ('".$name."',".$phone.",'".$email."','".$position."','".$msg."','Pending','Job','".$cv."')");
		return $result;
}



public function saveevent($name,$age,$gender,$phone,$email,$state,$city,$profi,$msg){
	$result =$this->db->con->query("INSERT INTO contacts(Name,Age,Gender,Phone,Email,State,City,proficient,Messege,Status,Type) VALUES ('".$name."','".$age."','".$gender."',".$phone.",'".$email."','".$state."','".$city."','".$profi."','".$msg."','Pending','Event')");
	return $result;
}
	public function getcontact(){
		$result =$this->db->con->query("SELECT * FROM contacts  WHERE Type='Contact' ORDER BY ID  DESC");
		$resultArray=array();
		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
			$resultArray[]=$item;
			# code...
		}
		return $resultArray;
	}
	public function getchef(){
		$result =$this->db->con->query("SELECT * FROM contacts WHERE Type='Chef'");
		$resultArray=array();
		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
			$resultArray[]=$item;
			# code...
		}
		return $resultArray;
	}
	public function getjobs(){
		$result =$this->db->con->query("SELECT * FROM contacts WHERE Type='Job'");
		$resultArray=array();
		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
			$resultArray[]=$item;
			# code...
		}
		return $resultArray;
	}
	public function getcontacthead(){
		$result =$this->db->con->query("SELECT * FROM contacthead");
		$resultArray=array();
		while ($item=mysqli_fetch_array($result,MYSQLI_ASSOC)) {
			$resultArray[]=$item;
			# code...
		}
		return $resultArray;
	}
	public function updatecontact($title,$paragraph,$new_filename,$id){
		if($new_filename==''||$new_filename==null){
			$result =$this->db->con->query("UPDATE contacthead SET Title='".$title."',Designation='".$paragraph."' WHERE ID='".$id."'");
					}else{
					
		$result =$this->db->con->query("UPDATE contacthead SET Title='".$title."',Designation='".$paragraph."',Bg_img='".$new_filename."' WHERE ID='".$id."'");
				}
					return $result;
	}
	public function updatepagecontact($paragraph,$id){
		$result =$this->db->con->query("UPDATE contacthead SET Designation='".$paragraph."' WHERE ID='".$id."'");
					return $result;
	}
}


?>