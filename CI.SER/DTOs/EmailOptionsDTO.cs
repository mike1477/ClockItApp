namespace CI.SER.DTOs
{
    public class EmailOptionsDTO
    {
        public string Host { get; set; }
        public string APIKey { get; set; }
        public string APIKeySecret { get; set; }
        public int Port { get; set; }
        public string SenderEmail { get; set; }
    }
}