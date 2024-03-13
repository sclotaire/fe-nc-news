const UserCard = (user, index) => {
    const oneUser = user.user

    return (
        <main>
            <p>{oneUser.name}</p>
            <p>{oneUser.username}</p>
            <img src={oneUser.avatar_url}/>
        </main>

    )
}

export default UserCard