export class Todo {
  id?: number | null
  title: string
  description: string
  constructor(id: number | null = null, title: string = '', description: string = '') {
    this.id = id
    this.title = title
    this.description = description
  }
}
