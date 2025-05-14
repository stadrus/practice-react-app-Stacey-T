import ProfileCard from "./ProfileCard"
const ProfileContainer = () => {
    const profileData = [
        { name: "Suganya", age: 20, bio: "Data Analyst" },
        { name: "Lavanya", age: 18, bio: "Software Engineer" },
        { name: "Stacey", age: 18, bio: "Developer" },
    ]
    const profilerender = profileData.map((profile, index) => (
        <ProfileCard
            key= {index}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
        />
    ));
    return (
        <div>
        <h3>User Profiles</h3>
        {profilerender}
        </div>
    )
}
export default ProfileContainer;
