import { DefaultProps } from "vue/types/options";

const localStorageKeyName = 'recordList';
type Tag = {
    id: string
    name: string
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicate'
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicate'
    remove: (id: string) => boolean
    save: () => void

}

const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    create(name: string) {
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) { return 'duplicate' };
        this.data.push({ id: name, name: name });
        this.save();
        return 'success';
    },
    update(id, name) {
        const idList = this.data.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicate';
            } else {
                const tag = this.data.filter(item => item.id === id)[0];
                tag.name = name;
                this.save();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    remove(id: string) {
        let index = -1;
        for (let i = 0; i <= this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
            }
            break;
        }
        console.log(index);
        this.data.splice(index, 1);
        console.log(this.data);
        this.save();
        return true;

    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};
export default tagListModel;