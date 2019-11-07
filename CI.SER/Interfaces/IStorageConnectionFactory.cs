using System.Threading.Tasks;
using Microsoft.Azure.Storage.Blob;

namespace CI.SER.Interfaces
{
    public interface IStorageConnectionFactory
    {
        Task<CloudBlobContainer> GetContainer();
    }
}