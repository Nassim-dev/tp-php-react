<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
 
class UserModel extends Database
{
    public function getUsers($limit)
    {
        return $this->select("SELECT * FROM users ORDER BY id ASC LIMIT ?", ["i", $limit]);
    }

    public function getUser($token) {
        // return $this->select("SELECT * FROM users WHERE token= ?", ["s", $token]);
        try {
            $stmt = $this->connection->prepare("SELECT username, token FROM users WHERE token= ?");
 
            if($stmt === false) {
                throw New Error("Unable to do prepared statement: " . $query);
            }

            $stmt->bind_param("s", $token);
            $stmt->execute();
            $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);                        
            $stmt->close(); 
            if(count($result) === 0) {
                throw New Error("The account doesn't exist");
            } 
            return $result;
        } catch(Exception $e) {
            throw New Exception( $e->getMessage() );
        }   

    }

    public function connectUser($body) {
        $username = $body['username'];
        $password = $body['password'];
        $db = new Database();
        try {
            $stmt = $this->connection->prepare("SELECT token FROM users WHERE username= ? AND password= ?");
 
            if($stmt === false) {
                throw New Exception("Unable to do prepared statement: " . $query);
            }
 
            $stmt->bind_param("s", $username);
            $stmt->bind_param("s", $password);
             
            $stmt->execute();
            $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);               
            $stmt->close(); 
            return $result;
        } catch(Exception $e) {
            throw New Exception( $e->getMessage() );
        }   
    }

    public function createUser($body, $token){
        $id = NULL;
        $username = $body['username'];
        $email = $body['email'];
        $password = $body['password'];
        $token = $token;

        $db = new Database();
        $query = "INSERT INTO users VALUES (?, ?, ?, ?, ?)";
        try {
            $stmt = $db->connection->prepare( $query );
 
            if($stmt === false) {
                throw New Exception("Unable to do prepared statement: " . $query);
            }
       
            $stmt->bind_param("issss", $id, $username, $password, $email, $token);
 
            $stmt->execute();
            return $stmt;
        } catch(Exception $e) {
            throw New Exception( $e->getMessage() );
        }     
    }


}