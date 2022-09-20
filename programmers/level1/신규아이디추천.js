function solution(new_id) {
    const id = 'userID'
    const user = new Map()

    user
        .set(id, new_id)
        .set(id, user.get(id)
            .toLowerCase()
            .replace(/[^a-z0-9\-\_\.\\]/g, '')
            .replace(/\.\.+/gim, '.')
            .replace(/^\.|\.$/g, '')
        )

    user
        .set(id, user.get(id) || 'a')
        .set(id, user.get(id).length > 15 ? user.get(id).substring(0, 15).replace(/\.$/g, '') : user.get(id))

    if (user.get(id).length < 3 && user.get(id).length > 0) {
        const arrString = [...user.get(id)]
        for (let idx = 0; idx < 2; idx++) {
            if (arrString.length > 2) {
                break
            }
            arrString.push(arrString[arrString.length - 1])
        }
        user.set(id, arrString.join(''))
    }

    return user.get(id)
}

solution("123_.def")
