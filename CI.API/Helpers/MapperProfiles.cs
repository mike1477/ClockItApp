using AutoMapper;
using CI.API.ViewModels;
using CI.DAL.Entities;

namespace CI.API.Helpers
{
    public class MapperProfiles : Profile
    {
        public MapperProfiles()
        {
            CreateMap<User, UserViewModel>();
        }
    }
}