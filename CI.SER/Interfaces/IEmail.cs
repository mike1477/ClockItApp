using System.Threading.Tasks;
using CI.SER.DTOs;

namespace CI.SER.Interfaces
{
    public interface IEmail
    {
         Task Send(string emailAddress, string body, EmailOptionsDTO options);
    }
}