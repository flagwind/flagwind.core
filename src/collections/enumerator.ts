/*
 * Authors:
 *   Jason <jasonsoop@gmail.com>
 *
 * Licensed under the MIT License.
 * Copyright (C) 2010-2017 Flagwind Inc. All rights reserved. 
 */

import { ArgumentException } from "../exceptions";

/**
 * 支持对泛型集合的简单迭代。
 * 
 * @interface
 * @author jason
 */
export interface IEnumerator<T>
{
    /**
     * 当前遍历的值，如果已经遍历结束，则返回 undefined。
     * 表示遍历是否结束。
     * @returns T
     */
    current: T;
    
    /**
     * 将枚举数推进到集合的下一个元素。
     * @returns boolean 如果枚举数已成功地推进到下一个元素，则为 true；如果枚举数传递到集合的末尾，则为 false。
     */
    next(): boolean;
}

/**
 * 表示一个默认的枚举器。
 * 
 * @class
 * @author jason
 */
export class Enumerator<T> implements IEnumerator<T>
{
    private _items: Array<T>;
    private _current: T;
    private _index: number;
    
    public constructor(items: Array<T>)
    {
        if(!items)
        {
            throw new ArgumentException("items");
        }
                
        this._index = 0;
        this._current = undefined;
        this._items = items;
    }
    
    /**
     * 当前遍历的值，如果已经遍历结束，则返回 undefined。
     * 表示遍历是否结束。
     * @returns T
     */
    public get current(): T
    {
        return this._current;
    }
    
    /**
     * 将枚举数推进到集合的下一个元素。
     * @returns boolean 如果枚举数已成功地推进到下一个元素，则为 true；如果枚举数传递到集合的末尾，则为 false。
     */
    public next(): boolean
    {
        let items = this._items;

        if(this._index < items.length)
        {
            this._current = items[this._index++];
            
            return true;
        }
        else
        {
            return false;
        }
    }
}