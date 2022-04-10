<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
 
class ArticleModel extends Database
{
    public function getArticles($limit)
    {
        return $this->select("SELECT * FROM articles ORDER BY id ASC LIMIT ?", ["i", $limit]);
    }

    public function postArticle($body, $author)
    {
        $id = NULL;
        $title = $body['title'];
        $content = $body['content'];
        $date = new DateTime();
        $date = $date->format('Y-m-d H:i:s');

        $db = new Database();
        $query = "INSERT INTO articles VALUES (?, ?, ?, ?, ?)";
        try {
            $stmt = $db->connection->prepare( $query );
 
            if($stmt === false) {
                throw New Exception("Unable to do prepared statement: " . $query);
            }
       
            $stmt->bind_param("issss", $id, $title, $author, $content, $date);
 
            $stmt->execute();
            return $stmt;
        } catch(Exception $e) {
            throw New Exception( $e->getMessage() );
        }     
    }
}