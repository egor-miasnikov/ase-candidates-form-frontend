import { firebase, firestore, functions } from '../Firebase'

export interface User {
    email?: string
    uid?: string
    displayName?: string
}

export interface Vector {
    title: string
    categories: Categories[]
}

export interface Categories {
    title: string
    subCategories: SubCategories[]
}

export interface SubCategories {
    title: string
    placeholder: string
    stateName: string
    AseLevel: number
}

export async function getUserInfo(uid: string): Promise<User | null> {
    try {
        const user = await firestore.collection('users').doc(uid).get()
        if (user.exists) {
            return user.data() as User
        }
        return null
    } catch (e) {
        console.error(e)
        return null
    }
}

export async function setUserInfo(uid: string, user: User) {
    try {
        await firestore.collection('users').doc(uid).set(user, { merge: true })
    } catch (e) {
        console.error(e)
    }
}

export async function userSignUp(uid: string, user: User) {
    try {
        await functions.httpsCallable('userSignUp')(user)
    } catch (e) {
        console.error(e)
    }
}

async function getDocumentByRef(ref: firebase.firestore.DocumentReference) {
    try {
        const result = await ref.get()
        if (result.exists) {
            return result.data()
        }
        console.log('No document')
        return null
    } catch (e) {
        console.error(e)
    }
}

async function getCollectionWitSubCollectionsByRef(ref: firebase.firestore.CollectionReference) {
    try {
        const result = await ref.get()
        if (result.empty) {
            console.log('No document')
            return null
        }
        const vectorCategories = []
        for (const doc of result.docs) {
            const subCategoriesData = await ref.doc(doc.id).collection('subCategories').get()
            const subCategories = subCategoriesData.docs.map((doc) => {
                return {
                    title: doc.get('title'),
                    placeholder: doc.get('placeholder'),
                    stateName: doc.get('stateName'),
                    AseLevel: doc.get('AseLevel'),
                }
            })
            const category = doc.data()
            console.log('DEBUG::category', category)
            console.log('DEBUG::subCategories', subCategories)
            category['subCategories'] = subCategories
            vectorCategories.push(category)
        }
        // const vectorCategories = result.docs.map(async (doc) => {
        //     const subCategoriesData = await ref.doc(doc.id).collection('subCategories').get()
        //     const subCategories = subCategoriesData.docs.map((doc) => doc.data())
        //     const category = doc.data()
        //     category['subCategories'] = subCategories
        //     return category
        // })
        return vectorCategories
    } catch (e) {
        console.error(e)
    }
}

export async function getVector(vectorName: string): Promise<Vector | null> {
    const vectorRef = firestore.collection('vectors').doc(vectorName)
    const categoriesRef = vectorRef.collection('categories')
    const vector = await getDocumentByRef(vectorRef)
    if (!vector) {
        return null
    }
    vector['categories'] = await getCollectionWitSubCollectionsByRef(categoriesRef)

    return vector as Vector
}

// const DevelopmentExperiencePart = {
//     title:
//         'Welcome to Development Experience and Knowledge category of Advanced Engineering performance form! HERE WE NEED ADD SOME TEXT FOR DECRIPTION AND ONBOARDING',
//     categories: [
//         {
//             title: 'Hands-on daily work with code',
//             subCategories: [
//                 {
//                     title: 'Expert level of technical knowledge(D5+)',
//                     placeholder: "<Tehnical stack you're using day-to-day work. Your expert area>",
//                     stateName: 'techStack',
//                     AseLevel: 1,
//                 },
//             ],
//         },
//     ],
// }
