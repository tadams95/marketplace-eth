import courses from "./index.json";

export const getAllCourses = () => {
    return {
        data: courses,
        courseMap: courses.reduce((a, c, i) => {
            a[c.id] = c
            c[c.id] = i
            return a
        }, {})
    }
}